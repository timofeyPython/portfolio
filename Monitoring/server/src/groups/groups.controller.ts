import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { GroupsService } from "./groups.service";
import { ERights } from "src/lib/types/enum";
import { Roles } from "src/auth/roles.decorator";
import { findAllGrDto } from "./groups.dto";

@Controller("groups")
@UseGuards(AuthGuard, RolesGuard)
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  @Roles([ERights.H_O_D])
  async findAll(
    @Query()
    findAllGrDto: findAllGrDto
  ) {
    const groups = await this.groupsService.findAll(findAllGrDto.dp);
    return groups;
  }

  @Get(":id")
  @Roles([ERights.H_O_D, ERights.H_O_G])
  async findOne(@Param("id") id: string) {
    const group = await this.groupsService.findOne(id);
    return group;
  }
}
