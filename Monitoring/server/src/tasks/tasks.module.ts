import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Task } from "./tasks.model";

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  providers: [TasksService],
  controllers: [TasksController],
  exports: [TasksService],
})
export class TasksModule {}
