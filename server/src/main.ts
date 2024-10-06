import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as session from 'express-session'
import * as cookieParser from 'cookie-parser';
import * as cors from "cors";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:5173"],
    })
  );

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(cookieParser());
  await app.listen(port);
  Logger.log(`Приложение запущено на порту: ${await app.getUrl()}`);
}
bootstrap();

 