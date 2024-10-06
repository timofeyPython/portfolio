import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { GroupsModule } from 'src/groups/groups.module';

@Module({
  imports: [SequelizeModule.forFeature([Task]), GroupsModule],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
