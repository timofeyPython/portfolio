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
            ],
            order: [['number', 'ASC']]
    })
        return tasks
    }

    async findOne(id: string): Promise<Task> {
        const task = await this.taskModel.findOne({
            where: { id }
        })
        return task
    }

    async create(obj: {
        name: string
        description: string
        number: number
        createdUser: any
        assigned: any
        stage: any
        startTask: Date
        endTask: Date
        grId: string
    }) {
        console.log(obj)
       return await this.taskModel.create(obj)
    }
}
