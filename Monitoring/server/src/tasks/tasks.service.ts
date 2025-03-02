import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Task } from "./tasks.model";
import { Groups } from "src/groups/groups.model";
import { Op } from "sequelize";
import { TStage, TTemplateUser } from "./tasks.type";
import { TaskCategory } from "src/taskcategory/taskcategory.model";

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task
  ) {}

  async findAll(params: {
    grId: string;
    date?: {
      start: Date;
      end: Date;
    };
    end?: boolean;
    assignedId?: string;
  }) {
    const status = params.end ? 3 : { [Op.in]: [0, 1, 2] };
    const where: any = { "stage.current.status": status };

    if (params?.date?.start && params?.date?.end)
      where.startTask = {
        [Op.between]: [
          new Date(params?.date.start),
          new Date(params?.date.end),
        ],
      };
    if (params?.assignedId) where[`assigned.id`] = params.assignedId;

    const tasks = await this.taskModel.findAll({
      where,
      include: [
        {
          model: Groups,
          where: { id: params?.grId },
        },
        {
          model: TaskCategory,
          as: "taskCategory",
        },
      ],
      order: [
        ["stage.current.status", "DESC"],
        [{ model: TaskCategory, as: "taskCategory" }, "name", "DESC"],
      ],
    });
    return tasks;
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskModel.findOne({
      where: { id },
      include: [
        {
          model: TaskCategory,
        },
      ],
    });
    return task;
  }

  async create(obj: {
    name: string;
    description: string;
    createdUser: TTemplateUser;
    assigned: TTemplateUser;
    stage: TStage;
    startTask: Date;
    endTask: Date;
    grId: string;
    taskCategoryId: string;
  }) {
    const lastEntry: number = await this.taskModel.max("number", {
      where: {
        grId: obj.grId,
        createdUser: obj.createdUser,
      },
    });
    const entry = { ...obj, ...{ number: lastEntry ? lastEntry + 1 : 1 } };
    const createEntry = await this.taskModel.create(entry);
    const findEntry = await this.taskModel.findOne({
      where: { id: createEntry.id },
      include: [{ model: TaskCategory }],
    });

    return findEntry;
  }

  async update({
    id,
    description,
    stage,
  }: {
    id: string;
    description: string;
    stage: TStage;
  }) {
    const task = await this.taskModel.findOne({ where: { id } });
    const history = task.stage?.history ? task.stage.history : [];
    history.push({
      date: task.stage.current.date,
      description: task.stage.current.description,
      status: task.stage.current.status,
    });

    await this.taskModel.update(
      {
        description,
        stage: { ...stage, history },
      },
      { where: { id } }
    );

    const entry = this.taskModel.findOne({
      where: { id },
      include: [{ model: TaskCategory }],
    });
    return entry;
  }

  async delete(id: string) {
    const entry = await this.taskModel.findOne({ where: { id } });
    await this.taskModel.destroy({ where: { id } });
    return entry.number;
  }
}
