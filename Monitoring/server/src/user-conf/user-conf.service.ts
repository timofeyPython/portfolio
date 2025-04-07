import { Inject, Injectable } from "@nestjs/common";
import { EDBNameTable } from "@lib/types/enum";
import { UsersConf } from "./user-conf.model";
import { RightsUsers } from "@src/rights-user/rights-user.model";

@Injectable()
export class UserConfService {
  constructor(
    @Inject(EDBNameTable.USER_CONF_TABLE)
    private readonly userConfModel: typeof UsersConf
  ) {}

  async getRights(id: string) {
    const right = await this.userConfModel.findOne({
      where: { userId: id },
      include: [
        {
          model: RightsUsers,
        },
      ],
    });
    return { id: right?.rights.id, role: right?.rights.name };
  }

  async create(userId: string, role: string) {
    const createEntry = await this.userConfModel.create({
      userId,
      rightId: role,
    });
    return {
      message: "УЗ создана",
      entry: createEntry,
    };
  }

  async update(userId: string, role: string) {
    const updatedEntry = await this.userConfModel.update(
      { rightId: role },
      {
        where: { userId },
      }
    );

    return {
      message: "УЗ создана",
      entry: updatedEntry,
    };
  }
}
