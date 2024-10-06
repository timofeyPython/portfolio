import { Controller, HttpCode, HttpStatus, Post, Body, UseGuards, Req, Res, Get, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './auth.dto'
import { Request  } from 'express';
 

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService ){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(
      @Body() signInDto: CreateUserDto, 
      @Req() request: Request,
    ) {
      const user = await this.authService.signIn(signInDto.login, signInDto.password);
      request.session.user = user
      console.log(request)
      return {
        message: `Добро пожаловать в систему ${user.login}`
      }
    }

    @HttpCode(HttpStatus.OK)
    @Get('check')
    async check(@Req() request: Request) {
      console.log(request.session)
      if (!request.session?.user) {
        throw new UnauthorizedException(`Сессия не установлена!`);
      }
 
      const user = request.session.user 
      const rights = await this.authService.check(user.login)
      request.session.user.rights = rights.roles
      
      return {
        isAuth: true
      }
    }
}
