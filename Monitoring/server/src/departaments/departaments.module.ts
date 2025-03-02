import { Module } from "@nestjs/common";
import { DepartamentsController } from "./departaments.controller";
import { DepartamentsService } from "./departaments.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Departaments } from "./departaments.model";

@Module({
  imports: [SequelizeModule.forFeature([Departaments])],
  controllers: [DepartamentsController],
  providers: [DepartamentsService],
})
export class DepartamentsModule {}
