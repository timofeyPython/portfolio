import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Branches } from "./branches.model";
import { templateMap } from "src/lib/utils/halperFn";

@Injectable()
export class BranchesService {
  constructor(
    @InjectModel(Branches)
    private readonly branchesModel: typeof Branches
  ) {}

  async findAll() {
    const branches = await this.branchesModel.findAll();
    return branches.map(templateMap);
  }
}
