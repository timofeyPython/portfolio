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
import { AuthGuard } from "src/auth/auth.guard";
import { Roles } from "src/auth/roles.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { ERights } from "src/lib/types/enum";
import { TasksService } from "./tasks.service";
import {
  queryTasksDto,
  createTaskDto,
  updateTaskDto,
  deleteTaskDto,
} from "./tasks.dto";

@Controller("tasks")
@UseGuards(AuthGuard, RolesGuard)
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  @Roles([ERights.EMPL, ERights.H_O_D, ERights.H_O_G])
  async getAll(@Query() query: queryTasksDto) {
    const tasks = await this.taskService.findAll({
      grId: query.grId,
      date: { start: query?.start, end: query?.end },
      end: JSON.parse(query?.status),
      assignedId: query.userId,
    });
    return tasks;
  }

  @Get(":id")
  @Roles([ERights.EMPL, ERights.H_O_D])
  async getOne(@Param("id") id: string): Promise<any> {
    const task = await this.taskService.findOne(id);
    return task;
  }

  @Get("lists")
  async getMyAll(@Query() queryinDto: queryTasksDto): Promise<Array<any>> {
    // const tasks = await this.taskService.findAll(queryinDto.gr, )
    return;
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  @Roles([ERights.EMPL, ERights.H_O_D])
  async create(@Body() createTaskDto: createTaskDto) {
    const entry = await this.taskService.create(createTaskDto);
    return { message: `Задание №${entry.number} создано успешно!`, entry };
  }

  @HttpCode(HttpStatus.OK)
  @Put()
  @Roles([ERights.EMPL, ERights.H_O_D])
  async update(@Body() updateTaskDto: updateTaskDto) {
    const entry = await this.taskService.update(updateTaskDto);
    return { message: `Задание №${entry.number} обновлено!`, entry };
  }

  @HttpCode(HttpStatus.OK)
  @Delete()
  @Roles([ERights.EMPL, ERights.H_O_D])
  async delete(@Query() query: deleteTaskDto) {
    const entry = await this.taskService.delete(query.id);
    return { message: `Задание № ${entry} удалено!`, id: query.id };
  }
}
