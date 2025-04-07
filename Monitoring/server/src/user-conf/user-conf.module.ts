import { Module } from "@nestjs/common";
import { UserConfService } from "./user-conf.service";
import { userConfProviders } from "./user-conf.provider";
import { UserConfController } from "./user-conf.controller";

@Module({
  providers: [UserConfService, ...userConfProviders],
  controllers: [UserConfController],
})
export class UserConfModule {}
