import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { TaskCategory } from "./taskcategory.model";

@Injectable()
export class TaskCategoryService {
  constructor(
    @InjectModel(TaskCategory)
    private taskCategoryModel: typeof TaskCategory
  ) {}

  async findAll() {
    return (await this.taskCategoryModel.findAll()).map(
      ({ id, name, description }) => ({
        value: id,
        label: name,
      })
    );
  }

  async create(taskCategory: { name: string; description: string }) {
    return await this.taskCategoryModel.create(taskCategory);
  }
}
