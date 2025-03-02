import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  UseGuards,
  Req,
  Res,
  Get,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./auth.dto";
import { Request } from "express";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async signIn(@Body() signInDto: CreateUserDto) {
    const token = await this.authService.signIn(
      signInDto.login,
      signInDto.password
    );

    return {
      message: `Добро пожаловать в систему`,
      token: token.access_token,
    };
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get("check")
  async check(@Req() request: Request) {
    const refreshToken = await this.authService.check(request["user"]?.login);

    return {
      refreshToken: refreshToken.access_token,
    };
  }
}
