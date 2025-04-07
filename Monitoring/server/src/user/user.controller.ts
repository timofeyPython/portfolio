import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import {
  CreateUserDto,
  FindOneParamsDto,
  UpdateUserDto,
  DeleteGroupDto,
} from "./types/users.dto";
import { IRestAPI } from "@src/lib/types/interfaces";
import { AuthGuard } from "@src/auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("users")
export class UserController implements IRestAPI {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  findOne(@Param() { id }: FindOneParamsDto) {
    return this.userService.findOne(String(id));
  }

  // @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  // @Delete(":id")
  @HttpCode(HttpStatus.OK)
  delete(@Param() { id }: DeleteGroupDto) {
    return this.userService.delete(id);
  }
}
