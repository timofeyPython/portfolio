import { Module } from "@nestjs/common";
import { GroupsService } from "./groups.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Groups } from "./groups.model";
import { GroupsController } from "./groups.controller";
import { TasksModule } from "src/tasks/tasks.module";

@Module({
  imports: [SequelizeModule.forFeature([Groups]), TasksModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
