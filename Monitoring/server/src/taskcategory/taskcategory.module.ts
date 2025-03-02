import { Module } from "@nestjs/common";
import { TaskCategoryService } from "./taskcategory.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { TaskCategory } from "./taskcategory.model";
import { TaskcategoryController } from "./taskcategory.controller";

@Module({
  imports: [SequelizeModule.forFeature([TaskCategory])],
  providers: [TaskCategoryService],
  controllers: [TaskcategoryController],
})
export class TaskCategoryModule {}
