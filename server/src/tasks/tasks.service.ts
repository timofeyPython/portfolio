import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { Groups } from 'src/groups/groups.model';
 
@Injectable()
export class TasksService {

    constructor(
        @InjectModel(Task)
        private  taskModel: typeof Task
     ) {}

    async findAll(grId: string) {
        const tasks = await this.taskModel.findAll({
            include: [
                {
                    model: Groups,
                    where: { id: grId }
                }
            ]
    })
        return tasks
    }

    async findOne(grId: string): Promise<Task> {
        const task = await this.taskModel.findOne({
            where: { grId }
        })
        return task
    }
}
