import { Inject, Injectable, UseGuards } from "@nestjs/common";
import { EDBNameTable } from "@src/lib/types/enum";
import { RightsGroups } from "./rights-group.model";
import { AuthGuard } from "@src/auth/auth.guard";

@UseGuards(AuthGuard)
@Injectable()
export class RightsGroupsService {
  constructor(
    @Inject(EDBNameTable.RIGHTS_GROUPS_TABLE)
    private readonly rightsGroupsModel: typeof RightsGroups
  ) {}

  async findAll() {
    const rights = await this.rightsGroupsModel.findAll();
    return rights.map(({ id, name, description }) => ({
      id,
      name,
      description,
    }));
  }
}
