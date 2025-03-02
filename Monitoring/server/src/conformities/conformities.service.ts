import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Conformities } from "./conformities.model";
import { Rights } from "src/rights/rights.model";

@Injectable()
export class ConformitiesService {
  constructor(
    @InjectModel(Conformities)
    private readonly conformitiesModel: typeof Conformities
  ) {}

  async findAll(id: string) {
    const result = await this.conformitiesModel.findAll({
      where: {
        userId: id,
      },
      include: [Rights],
    });

    return result;
  }
}
