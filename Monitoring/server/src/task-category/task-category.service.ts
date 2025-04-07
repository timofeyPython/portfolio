import { Inject, Injectable } from "@nestjs/common";
import { TaskCategory } from "./task-category.model";
import { EDBNameTable } from "@lib/types/enum";

@Injectable()
export class TaskCategoryService {
  constructor(
    @Inject(EDBNameTable.TASK_CATEGORY_TABLE)
    private readonly taskCategoryModel: typeof TaskCategory
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
