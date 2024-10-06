import { Controller, Get, HttpCode, HttpStatus, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { GroupsService } from './groups.service';
import { ERights } from 'src/types/enum';
import { Roles } from 'src/auth/roles.decorator';
import { findAllGrDto } from './groups.dto';

@Controller('groups')
@UseGuards(AuthGuard, RolesGuard)
export class GroupsController {
    constructor(
        private groupsService: GroupsService
    ){}

    @HttpCode(HttpStatus.OK)
    @Get()
    @Roles([ERights.H_O_D])
    async findAll(
        @Query()
        findAllGrDto: findAllGrDto
    ) {
        const groups = await this.groupsService.findAll(findAllGrDto.dp)
        return groups
    }

}
