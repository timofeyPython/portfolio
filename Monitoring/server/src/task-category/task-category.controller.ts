import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from "@nestjs/common";
import { TaskCategoryService } from "./task-category.service";
import { createTaskCategoryDto } from "./types/taskcategory.dto";
import { AuthGuard } from "@src/auth/auth.guard";

@Controller("taskcategory")
@UseGuards(AuthGuard)
export class TaskcategoryController {
  constructor(private readonly taskCategoryService: TaskCategoryService) {}

  @Get()
  async getAll() {
    return await this.taskCategoryService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  async create(@Body() createTaskCategoryDto: createTaskCategoryDto) {
    const entry = await this.taskCategoryService.create(createTaskCategoryDto);
    return {
      message: `Категория ${entry.name} создана успешно`,
      entry,
    };
  }
}
