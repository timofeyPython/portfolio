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
  Req,
  UseGuards,
} from "@nestjs/common";
import { IRestAPI } from "@lib/types/interfaces";
import { GroupConfService } from "./group-conf.service";
import {
  CreateGroupConfDto,
  DeleteGroupConfDto,
  FindOneGroupConfDto,
  UpdateGroupConfDto,
} from "./types/group-conf.dto";
import { AuthGuard } from "../auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("group_conf")
export class GroupConfController implements IRestAPI {
  constructor(private readonly groupConfService: GroupConfService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllInvated(@Req() request: Request) {
    const userId = request["user"]?.id;
    if (!userId)
      throw new HttpException("Нет id пользователя", HttpStatus.BAD_REQUEST);
    return this.groupConfService.findAllInvated(userId);
  }

  @Get("admin")
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this.groupConfService.findAll();
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() { id }: FindOneGroupConfDto) {
    return this.groupConfService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() args: CreateGroupConfDto) {
    return this.groupConfService.create(args);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() args: UpdateGroupConfDto) {
    return this.groupConfService.update(args);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  async delete(@Param() { id }: DeleteGroupConfDto) {
    return this.groupConfService.delete(id);
  }
}
