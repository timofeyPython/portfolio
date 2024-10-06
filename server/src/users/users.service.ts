import { Injectable } from '@nestjs/common';
import { Users } from './users.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)
        private readonly userModel: typeof Users
    ){}

    async findAll() {
        const result = await this.userModel.findAll()
        return result 
    }

    async findOne(login: string) {
        const result = await this.userModel.findOne({
            where: {login}
        })
        return result
    }
}