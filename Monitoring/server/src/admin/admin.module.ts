import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { UserService } from "@src/user/user.service";
import { userProviders } from "@src/user/user.providers";
import { UserConfService } from "@src/user-conf/user-conf.service";
import { userConfProviders } from "@src/user-conf/user-conf.provider";

@Module({
  providers: [
    AdminService,
    UserService,
    UserConfService,
    ...userProviders,
    ...userConfProviders,
  ],
  controllers: [AdminController],
})
export class AdminModule {}
