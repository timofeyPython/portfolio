import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { IRestAPI } from "@lib/types/interfaces";
import { CreateUserDto, DeleteGroupDto, FindOneParamsDto, UpdateUserDto } from "./types/admin.dto";
import { AuthGuard } from "@src/auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("admins")
export class AdminController implements IRestAPI {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.adminService.findUsersAndRights();
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  findOne(@Param() { id }: FindOneParamsDto) {
    return this.adminService.findUserAndRights(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.adminService.createUser(createUserDto);
  }

  @Put()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.adminService.updateUser(updateUserDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  delete(@Param() { id }: DeleteGroupDto) {
    return this.adminService.deleteUser(id);
  }
}
