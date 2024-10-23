import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ERights } from 'src/types/enum';
import { TasksService } from './tasks.service';
import { queryTasksDto, createTaskDto } from './tasks.dto';
import { Request  } from 'express';

@Controller('tasks')
@UseGuards(AuthGuard, RolesGuard)
export class TasksController {
  constructor(
    private readonly taskService: TasksService
  ){}

  @Get()
  @Roles([ERights.EMPL, ERights.H_O_D, ERights.H_O_G])
  async getAll(
    @Req() request: Request
  ) {
    const grId = request.session?.user?.grId
    if (!grId)
      return []
    const tasks = await this.taskService.findAll(grId)
    return tasks 
  } 

  @Get(':id')
  @Roles([ERights.EMPL, ERights.H_O_D])
  async getOne(
    @Param('id') id:string
  ): Promise<any> {
    const task = await this.taskService.findOne(id)
    return task
  }

  @Get('lists')
  async getMyAll(
    @Query() queryinDto: queryTasksDto
  ): Promise<Array<any>> {
    const tasks = await this.taskService.findAll(queryinDto.gr)
    return tasks 
  }

 
  @HttpCode(HttpStatus.OK)
  @Post()
  @Roles([ERights.EMPL, ERights.H_O_D])
  async create(
    @Body() createTaskDto: createTaskDto
  ) {
    const entry = await this.taskService.create(createTaskDto)
    return {message: 'Задание создано успешно!', entry}
  }

}
