import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Divisions } from "./divisions.model";
import { templateMap } from "src/lib/utils/halperFn";

@Injectable()
export class DivisionsService {
  constructor(
    @InjectModel(Divisions)
    private readonly divisionsModel: typeof Divisions
  ) {}

  async findAll(branch: string) {
    const divisions = await this.divisionsModel.findAll({
      where: { branchId: branch },
    });

    return divisions.map(templateMap);
  }
}
