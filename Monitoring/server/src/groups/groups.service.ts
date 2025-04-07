import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Groups } from "./groups.model";
import { templateMap } from "@lib/utils/halperFn";
import { EDBNameTable } from "@lib/types/enum";
import { CreateGroupDto, UpdateGroupDto } from "./types/groups.dto";
import { GroupConf } from "@src/group-conf/group-conf.model";
import { Users } from "@src/user/user.model";
import { RightsGroups } from "@src/rights-group/rights-group.model";
import { TasksService } from "@src/tasks/tasks.service";

@Injectable()
export class GroupsService {
  constructor(
    @Inject(EDBNameTable.GROUPS_TABLE)
    private readonly groupsModel: typeof Groups,
    @Inject(EDBNameTable.GROUP_CONF_TABLE)
    private readonly groupConfModel: typeof GroupConf,
    @Inject(forwardRef(() => TasksService))
    private readonly tasksService: TasksService,
  ) {}

  async findAll() {
    const allGroups = await this.groupsModel.findAll({
      order: ["nameFull", "DESC"],
    });
    return allGroups.map(templateMap);
  }

  async findOne(id: string) {
    const entry = await this.groupsModel.findOne({ where: { id } });
    if (!entry) throw new HttpException("Entry no found", HttpStatus.CONFLICT);
    return {
      entry
    };
  }

  async create({
    name,
    nameFull,
    createdUserId,
    description,
    invatedUsers,
  }: CreateGroupDto) {
    const createEntry = await this.groupsModel.create({
      name,
      nameFull,
      createdUserId,
      description,
    });

    if (Array.isArray(invatedUsers)) {
      Promise.all(
        invatedUsers.map(async ({ userId, rightId }) => {
          await this.groupConfModel.create({
            groupId: createEntry.id,
            userId,
            rightId,
          });
        })
      );
    }

    return {
      message: `Группа ${name} создана`,
      entry: {
        ...createEntry.dataValues,
        participants: invatedUsers.map((user) => ({
          id: user.userId,
          name: user.description,
        })),
      },
    };
  }

  async update({
    id,
    name,
    nameFull,
    description,
    invatedUsers,
  }: UpdateGroupDto) {
    await this.findOne(id);
    await this.groupsModel.update(
      { name, nameFull, description },
      {
        where: { id },
      }
    );
    if (Array.isArray(invatedUsers)) {
      if (invatedUsers.length > 0) {
        Promise.all(
          invatedUsers.map(async (user) => {
            await this.groupConfModel.destroy({
              where: {
                groupId: id,
              },
            });
            await this.groupConfModel.create({
              userId: user.userId,
              rightId: user.rightId,
              groupId: id,
            });
          })
        );
      } else {
        await this.groupConfModel.destroy({
          where: { groupId: id },
        });
      }
    }

    const updatedEntry = await this.findOneGroupAndInvatedLists(id);

    return {
      message: `Группа ${name} обновлена`,
      entry: {
        ...updatedEntry.entry.dataValues,
        participants: invatedUsers.map((user) => ({
          id: user.userId,
          name: user.description,
        })),
      },
    };
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.groupsModel.destroy({ where: { id } });
    return {
      message: `Запись ${id} удалена`,
    };
  }

  async findMyGroup(id: string) {
    const userGroups = await this.groupsModel.findAll({
      where: { createdUserId: id },
    });
    const userGroupsAndParticipant = Promise.all(
      userGroups.map(async (group) => {
        const participants = await this.groupConfModel.findAll({
          where: { groupId: group.id },
          include: [
            {
              model: Users,
            },
          ],
        });

        return {
          ...templateMap(group.dataValues),
          participants: participants.map((participant) => ({
            id: participant.userId,
            name: participant.users.name,
          })),
        };
      })
    );
    return userGroupsAndParticipant;
  }

  async findOneGroupAndUsers(groupId: string) {
    const gropConf = await this.groupConfModel.findAll({
      where: { groupId },
      include: [
        {
          model: Users,
        },
        {
          model: RightsGroups,
        },
      ],
    });
    const users = await Promise.all(
      gropConf.map(async (entry, i) => {
        // find active tasks
        const activeTasks = await this.tasksService.findAll({
          grId: entry.groupId,
          assignedId: entry.userId,
          active: true,
        });

        return {
          id: entry.id,
          icon: "waiting...",
          right: entry.rights.description,
          user: {
            id: entry.users.id,
            name: entry.users.name,
          },
          tasks: {
            active: activeTasks.length,
          },
        };
      })
    );

    const group = await this.findOneGroupAndInvatedLists(groupId);

    return {
      users,
      group: templateMap(group.entry),
    };
  }

  async findOneGroupAndInvatedLists(id: string) {
    const group = await this.findOne(id);
    const invatedUsers = await this.groupConfModel.findAll({
      where: { groupId: id },
      include: [
        {
          model: Users,
        },
      ],
    });

    return {
      entry: group.entry,
      invatedUsers: invatedUsers.map((user) => ({
        userId: user.userId,
        rightId: user.rightId,
        description: user?.users?.name,
      })),
  }
  }

}
