import { Module } from "@nestjs/common";
import { DivisionsController } from "./divisions.controller";
import { Divisions } from "./divisions.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { DivisionsService } from "./divisions.service";

@Module({
  imports: [SequelizeModule.forFeature([Divisions])],
  controllers: [DivisionsController],
  providers: [DivisionsService],
})
export class DivisionsModule {}
