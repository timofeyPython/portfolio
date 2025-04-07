import { Module } from "@nestjs/common";
import { TaskCategoryService } from "./task-category.service";
import { TaskcategoryController } from "./task-category.controller";
import { taskCategoryProviders } from "./task-category.provider";

@Module({
  providers: [TaskCategoryService, ...taskCategoryProviders],
  controllers: [TaskcategoryController],
})
export class TaskCategoryModule {}
