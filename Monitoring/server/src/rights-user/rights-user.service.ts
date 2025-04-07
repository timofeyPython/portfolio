import { Inject, Injectable } from "@nestjs/common";
import { EDBNameTable } from "@lib/types/enum";
import { RightsUsers } from "./rights-user.model";

@Injectable()
export class RightsUsersService {
  constructor(
    @Inject(EDBNameTable.RIGHTS_USERS_TABLE)
    private readonly rightsUsersModel: typeof RightsUsers
  ) {}

  async findAll() {
    const rights = await this.rightsUsersModel.findAll();
    return rights.map((right) => ({ id: right.id, description: right.description }));
  }
}
