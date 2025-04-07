import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { userProviders } from "./user.providers";

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UsersModule {}
