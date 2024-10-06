import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Groups } from './groups.model';
import { templateMap } from 'src/utils/halperFn';

@Injectable()
export class GroupsService {
    constructor(
        @InjectModel(Groups)
        private readonly groupsModel: typeof Groups
    ){}

    async findAll(dp: string) {
        const groups = await this.groupsModel.findAll({
            where: {dpId: dp}
        })

        return groups.map(templateMap)
    }
}
