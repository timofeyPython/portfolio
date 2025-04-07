import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@src/auth/auth.guard';
import { IRestAPI } from '@lib/types/interfaces';
import { UserConfService } from './user-conf.service';
import { FindOneGroupConfDto } from './types/user-conf.dto';

@UseGuards(AuthGuard)
@Controller('user_conf')
export class UserConfController implements IRestAPI {
    constructor(private readonly userConfService: UserConfService) {}

    findAll(arg1: unknown, arg2: unknown): void {
        throw new Error('Method not implemented.');
    }

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    findOne(@Param() { id }: FindOneGroupConfDto) {
        return this.userConfService.getRights(id)
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
