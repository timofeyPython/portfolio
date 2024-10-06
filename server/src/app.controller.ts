import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';


@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,
  ) {}

  @Get()
  index(@Req() request: Request) 
  {
    return this.appService.get() ;
  }
}