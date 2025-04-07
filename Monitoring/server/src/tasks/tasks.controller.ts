import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@src/auth/auth.guard";
import { TasksService } from "./tasks.service";
import {
  queryTasksDto,
  createTaskDto,
  updateTaskDto,
  deleteTaskDto,
} from "./types/tasks.dto";

@UseGuards(AuthGuard)
@Controller("tasks")
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAll(@Query() query: queryTasksDto) {
    const tasks = await this.taskService.findAll({
      grId: query.grId,
      date: { start: query?.start, end: query?.end },
      active: JSON.parse(query?.active),
      assignedId: query.userId,
    });
    return tasks;
  }

  @HttpCode(HttpStatus.OK)
  @Get(":id")
  async getOne(@Param("id") id: string): Promise<any> {
    const task = await this.taskService.findOne(id);
    return task;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createTaskDto: createTaskDto) {
    const entry = await this.taskService.create(createTaskDto);
    return { message: `Задание №${entry.number} создано успешно!`, entry };
  }

  @HttpCode(HttpStatus.OK)
  @Put()
  async update(@Body() updateTaskDto: updateTaskDto) {
    const entry = await this.taskService.update(updateTaskDto);
    return { message: `Задание №${entry.number} обновлено!`, entry };
  }

  @HttpCode(HttpStatus.OK)
  @Delete()
  async delete(@Query() query: deleteTaskDto) {
    const entry = await this.taskService.delete(query.id);
    return { message: `Задание № ${entry} удалено!`, id: query.id };
  }
}
