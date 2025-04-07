import { Module } from "@nestjs/common";
import { RightsGroupsService } from "./rights-group.service";
import { RightsGroupController } from "./rights-group.controller";
import { rightsGroupProvider } from "./rights-group.provider";

@Module({
  providers: [RightsGroupsService, ...rightsGroupProvider],
  controllers: [RightsGroupController],
})
export class RightsGroupConfModule {}
