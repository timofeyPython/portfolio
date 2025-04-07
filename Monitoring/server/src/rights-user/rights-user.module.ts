import { Module } from "@nestjs/common";
import { RightsUsersService } from "./rights-user.service";
import { rightsUsersProvider } from "./rights-user.provider";
import { RightsUsersController } from "./rights-user.controller";

@Module({
  providers: [RightsUsersService, ...rightsUsersProvider],
  controllers: [RightsUsersController],
})
export class RightsModule {}
