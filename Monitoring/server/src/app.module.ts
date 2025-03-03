import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./lib/config/database/database.module";
import { dotEnvPath } from "./lib/config/configuration";
import { InfoModule } from "./info/info.module";
import { join } from "path";
console.log(dotEnvPath);
console.log(process.env.NODE_ENV);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: dotEnvPath,
    }),
    DatabaseModule,
    InfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
