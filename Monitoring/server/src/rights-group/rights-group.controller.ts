import { Controller, Get, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@src/auth/auth.guard';
import { IRestAPI } from '@src/lib/types/interfaces';
import { RightsGroupsService } from './rights-group.service';

@UseGuards(AuthGuard)
@Controller('rights_groups')
export class RightsGroupController implements IRestAPI {
    constructor(private readonly rightService: RightsGroupsService) {}

    findOne(args: unknown): void {
        throw new Error('Method not implemented.');
    }
    
    @HttpCode(HttpStatus.OK)
    @Get()
    async findAll() {
        return await this.rightService.findAll();
    }

    create(arg1: unknown, arg2: unknown): void {
        throw new Error('Method not implemented.');
    }

    update(args: unknown): void {
        throw new Error('Method not implemented.');
    }

    delete(args: unknown): void {
        throw new Error('Method not implemented.');
    }
}
