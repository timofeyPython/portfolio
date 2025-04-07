import { Module } from "@nestjs/common";
import { GroupConfService } from "./group-conf.service";
import { GroupConfController } from "./group-conf.controller";
import { groupConfProviders } from "./group-conf.provider";

@Module({
  providers: [GroupConfService, ...groupConfProviders],
  controllers: [GroupConfController],
})
export class GroupConfModule {}
