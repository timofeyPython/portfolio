import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ERights } from 'src/types/enum';
import { TasksService } from './tasks.service';
import { queryTasksDto } from './tasks.dto';

@Controller('tasks')
@UseGuards(AuthGuard, RolesGuard)
export class TasksController {
  constructor(
    private readonly taskService: TasksService
  ){}

  @Get()
  @Roles([ERights.EMPL, ERights.H_O_D, ERights.H_O_G])
  async getAll(
    @Query() queryinDto: queryTasksDto
  ): Promise<Array<any>> {
 
    const tasks = await this.taskService.findAll(queryinDto.gr)

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

}
