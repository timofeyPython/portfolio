import { Controller, Get, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { IRestAPI } from '@lib/types/interfaces';
import { RightsUsersService } from './rights-user.service';
import { AuthGuard } from '@src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('rights_users')
export class RightsUsersController implements IRestAPI {
    constructor(
        private readonly rightsUsersService: RightsUsersService
    ){}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
      return this.rightsUsersService.findAll();
    }
    findOne(args: unknown): void {
        throw new Error('Method not implemented.');
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
