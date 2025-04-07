import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { Tasks } from "./tasks.model";
import { Groups } from "@src/groups/groups.model";
import { Op } from "sequelize";
import { ITasksFindAllParams, TStage, TTemplateUser } from "./types/tasks.type";
import { TaskCategory } from "@src/task-category/task-category.model";
import { EDBNameTable } from "@lib/types/enum";
import { updateTaskDto } from "./types/tasks.dto";
import { UserService } from "@src/user/user.service";
import { findStatus, getHtmlMessage } from "@src/lib/utils/halperFn";
import { MailerService } from "@src/mailer/mailer.service";
import { GroupsService } from "@src/groups/groups.service";
 
@Injectable()
export class TasksService {
  constructor(
    @Inject(EDBNameTable.TASKS_TABLE)
    private readonly taskModel: typeof Tasks,
    private readonly mailService: MailerService,
    private readonly userService: UserService,
    @Inject(forwardRef(() => GroupsService))
    private readonly groupService: GroupsService,
  ) {}

  async findAll(params: ITasksFindAllParams) {
    const status = !params.active ? 3 : { [Op.in]: [0, 1, 2] };
    const where: any = { "stage.current.status": status };
    const whereGrId = params?.grId ? { id: params?.grId } : {};

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
          where: whereGrId,
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

  async findOne(id: string): Promise<Tasks> {
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

    // Задание назначено другим пользователем 
    if (obj.createdUser.id !== obj.assigned.id) {
      const user = await this.userService.findOne(obj.assigned.id);
      const group = await this.groupService.findOne(entry.grId);
      this.mailService.sendMail({
        to: user.info?.mail,
        html: getHtmlMessage({
          title: `Вам назначено задание ${obj.name}`,
          userName: obj.createdUser.name,
          userName1: entry.assigned.name,
          description: obj.description,
          date1: obj.startTask,
          date2: obj.endTask,
          groupName: group.entry.nameFull,
        }),
      });
    }
    return findEntry;
  }

  async update({
    id,
    description,
    stage,
    name,
    startTask,
    endTask,
    taskCategoryId,
    grId,
  }: updateTaskDto) {
    const task = await this.taskModel.findOne({ where: { id } });
    const history = task.stage?.history ? task.stage.history : [];
    history.push({
      date: task.stage.current.date,
      description: task.stage.current.description,
      status: task.stage.current.status,
    });

    await this.taskModel.update(
      {
        name,
        startTask,
        endTask,
        taskCategoryId,
        description,
        stage: { ...stage, history },
        grId,
      },
      { where: { id } }
    );

    const entry = await this.taskModel.findOne({
      where: { id },
      include: [{ model: TaskCategory }],
    });

    if (entry.createdUser.id !== entry.assigned.id) {
      const user = await this.userService.findOne(entry.createdUser.id);
      const group = await this.groupService.findOne(entry.grId);
      const templateHtmlMessage = getHtmlMessage({
        title: `Задание ${entry.name} обновлено, статус: ${findStatus(stage.current.status)}`,
        userName: entry.createdUser.name,
        userName1: entry.assigned.name,
        description: entry.description,
        date1: entry.startTask,
        date2: entry.endTask,
        groupName: group.entry.nameFull,
      });
      
      if (stage.current.status == "3")
        this.mailService.sendMail({
          to: user.info?.mail,
          html: templateHtmlMessage,
        });
      else
        this.mailService.sendMail({
          to: user.info?.mail,
          html: templateHtmlMessage,
        });
    }

    return entry;
  }

  async delete(id: string) {
    const entry = await this.taskModel.findOne({ where: { id } });
    await this.taskModel.destroy({ where: { id } });
    if (entry.createdUser.id !== entry.assigned.id) {
      const user = await this.userService.findOne(entry.createdUser.id);
      const group = await this.groupService.findOne(entry.grId);
      this.mailService.sendMail({
        to: user.info?.mail,
        html: getHtmlMessage({
          title: `Задание ${entry.name} удалено, статус: ${findStatus(entry.stage.current.status)}`,
          userName: entry.createdUser.name,
          userName1: entry.assigned.name,
          description: entry.description,
          date1: entry.startTask,
          date2: entry.endTask,
          groupName: group.entry.nameFull,
        }),
      });
    }
    return entry.number;
  }
}
