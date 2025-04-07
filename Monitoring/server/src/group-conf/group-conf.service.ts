import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { EDBNameTable } from "@lib/types/enum";
import { GroupConf } from "./group-conf.model";
import { RightsGroups } from "@src/rights-group/rights-group.model";
import { Groups } from "@src/groups/groups.model";
import { Users } from "@src/user/user.model";
import { templateMap } from "@lib/utils/halperFn";

@Injectable()
export class GroupConfService {
  constructor(
    @Inject(EDBNameTable.GROUP_CONF_TABLE)
    private readonly groupConfModel: typeof GroupConf
  ) {}

  async findAll() {
    const groupConf = this.groupConfModel.findAll();
    return groupConf;
  }

  async findOne(id: string) {
    const entry = await this.groupConfModel.findOne({ where: { id } });
    if (!entry) throw new HttpException("Entry no found", HttpStatus.CONFLICT);
    return entry;
  }

  async create({ userId, groupId, rightId }) {
    const createEntry = await this.groupConfModel.findOne({
      where: { userId, groupId },
    });
    if (createEntry)
      throw new HttpException(
        "the entry has already been created",
        HttpStatus.CONFLICT
      );
    const createdEntry = await this.groupConfModel.create({
      userId,
      groupId,
      rightId,
    });

    return {
      message: `Права созданы`,
      entry: createdEntry,
    };
  }

  async update({ id, rightId }) {
    await this.findOne(id);
    await this.groupConfModel.update({ rightId }, { where: { id } });
    const updatedEntry = await this.findOne(id);
    return {
      entry: updatedEntry,
      message: `Права обновлены`,
    };
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.groupConfModel.destroy({ where: { id } });
    return {
      message: `Права на журнал удалены`,
    };
  }

  async getRights(userId: string) {
    const rights = await this.groupConfModel.findAll({where: {userId}, include: [
      {
        model: RightsGroups
      }
    ]});
    return rights.map((right) => (
      {
        userId: right.userId,
        groupId: right.groupId,
        rightId: right.rightId,
        rightName: right?.rights?.name,
      }
    ));
  }

  async findAllInvated(id: string) {
      const invatedGroupsConf = await this.groupConfModel.findAll({
        where: { userId: id },
        include: [
          {
            model: Groups,
          },
          {
            model: Users,
          }
        ],
      });

      const invatedGroupsAndParticipant = Promise.all(invatedGroupsConf.map(async (groupConf) => {
        const participants = await this.groupConfModel.findAll({
          where: {groupId: groupConf.groupId},
          include: [
            {
              model: Users,
            },
            {
              model: Groups
            }
          ],
        })

        return {
          ...templateMap(groupConf.groups.dataValues),
          participants: participants.map((participant) => ({
            id: participant.userId,
            name: participant.users.name,
          })),
        };
      }))

      return invatedGroupsAndParticipant
  }
}
