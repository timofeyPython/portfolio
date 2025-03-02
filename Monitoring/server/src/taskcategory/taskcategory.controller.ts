import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from "@nestjs/common";
import { TaskCategoryService } from "./taskcategory.service";
import { createTaskCategoryDto } from "./taskcategory.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { ERights } from "src/lib/types/enum";
import { Roles } from "src/auth/roles.decorator";

@Controller("taskcategory")
@UseGuards(AuthGuard, RolesGuard)
export class TaskcategoryController {
  constructor(private readonly taskCategoryService: TaskCategoryService) {}

  @Get()
  @Roles([ERights.EMPL, ERights.H_O_D])
  async getAll() {
    return await this.taskCategoryService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Roles([ERights.EMPL, ERights.H_O_D])
  @Post()
  async create(@Body() createTaskCategoryDto: createTaskCategoryDto) {
    const entry = await this.taskCategoryService.create(createTaskCategoryDto);
    return {
      message: `Категория ${entry.name} создана успешно`,
      entry,
    };
  }
}
