import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Departaments } from "./departaments.model";
import { templateMap } from "../lib/utils/halperFn";

@Injectable()
export class DepartamentsService {
  constructor(
    @InjectModel(Departaments)
    private readonly departamentModel: typeof Departaments
  ) {}

  async findAll(dv: string) {
    const departament = await this.departamentModel.findAll({
      where: { divisionId: dv },
    });

    return departament.map(templateMap);
  }
}
