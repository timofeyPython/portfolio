import { Module } from "@nestjs/common";
import { RightsService } from "./rights.service";
import { RightsController } from "./rights.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Rights } from "./rights.model";

@Module({
  imports: [SequelizeModule.forFeature([Rights])],
  providers: [RightsService],
  controllers: [RightsController],
})
export class RightsModule {}
