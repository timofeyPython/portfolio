import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Body,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { Users } from "./users.model";
import { CreateUserDto } from "./users.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): Promise<Users[]> {
    // throw new HttpException('Внутрення ошибка', HttpStatus.BAD_REQUEST)
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Users> {
    return this.userService.findOne(String(id));
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto): string {
    return "good";
  }
}
