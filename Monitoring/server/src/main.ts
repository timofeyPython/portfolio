import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { Logger, ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import { NotFoundExceptionFilter } from "./lib/filters/notFoundExpeception";

async function bootstrap() {
  let app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>("PORT");
  app.setGlobalPrefix("apiv2");
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:5173"],
    })
  );
  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.use(cookieParser());
  await app.listen(port);
  Logger.log(`Приложение запущено на порту: ${await app.getUrl()}`);
}
bootstrap();
