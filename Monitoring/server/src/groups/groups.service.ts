import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Groups } from "./groups.model";
import { templateMap } from "src/lib/utils/halperFn";
import { Users } from "src/users/users.model";
import { TasksService } from "src/tasks/tasks.service";

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Groups)
    private readonly groupsModel: typeof Groups,
    @Inject(forwardRef(() => TasksService))
    private tasksService: TasksService
  ) {}

  async findAll(dp: string) {
    const groups = await this.groupsModel.findAll({
      where: { dpId: dp },
    });

    return groups.map(templateMap);
  }

  async findOne(gr: string) {
    const group = await this.groupsModel.findOne({ where: { id: gr } });
    const users = await Users.findAll({ where: { grId: gr } });
    const usersTasks = await Promise.all(
      users.map(async (user) => {
        const activeTasks = await this.tasksService.findAll({
          grId: gr,
          assignedId: user.id,
        });
        return {
          name: user.name,
          id: user.id,
          info: user.info,
          tasks: {
            active: activeTasks.length,
          },
        };
      })
    );

    return {
      group: {
        id: group.id,
        name: group.name,
        nameFull: group.nameFull,
        users: usersTasks,
      },
    };
  }
}
