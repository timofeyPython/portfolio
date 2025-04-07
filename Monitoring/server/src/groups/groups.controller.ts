import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";

import { GroupsService } from "./groups.service";
import { IRestAPI } from "../lib/types/interfaces";
import {
  UpdateGroupDto,
  FindOneGroupDto,
  CreateGroupDto,
  DeleteGroupDto,
} from "./types/groups.dto";
import { AuthGuard } from "@src/auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("groups")
export class GroupsController implements IRestAPI {
  constructor(private groupsService: GroupsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Req() request: Request) {
    const userId = request["user"]?.id;
    if (!userId)
      throw new HttpException("Нет id пользователя", HttpStatus.BAD_REQUEST);
    return this.groupsService.findMyGroup(userId);
  }
  
  @Get(":id")
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() { id }: FindOneGroupDto) {
    return await this.groupsService.findOne(id);
  }

  @Get("invated/:id")
  @HttpCode(HttpStatus.OK)
  async findOneGroupAndInvatedLists(@Param() { id }: FindOneGroupDto) {
    return await this.groupsService.findOneGroupAndInvatedLists(id);
  }

  @Get("participants/:id")
  @HttpCode(HttpStatus.OK)
  async findOneGroupAndUsers(@Param() { id }: FindOneGroupDto) {
    return await this.groupsService.findOneGroupAndUsers(id);
  }
  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Req() request: Request,
    @Body() { name, nameFull, description, invatedUsers }: CreateGroupDto
  ) {
    const userId: string = request["user"]?.id;
    if (!userId)
      throw new HttpException("Нет id пользователя", HttpStatus.BAD_REQUEST);
    return this.groupsService.create({
      name,
      nameFull,
      createdUserId: userId,
      description,
      invatedUsers,
    });
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() { id, name, nameFull, invatedUsers, description }: UpdateGroupDto) {
    return this.groupsService.update({ id, name, nameFull, invatedUsers, description });
  }

  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  async delete(@Param() { id }: DeleteGroupDto) {
    return this.groupsService.delete(id);
  }
}
