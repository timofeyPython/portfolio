import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Conformities } from "./conformities.model";
import { ConformitiesService } from "./conformities.service";
import { ConformitiesController } from "./conformities.controller";

@Module({
  imports: [SequelizeModule.forFeature([Conformities])],
  exports: [ConformitiesService],
  providers: [ConformitiesService],
  controllers: [ConformitiesController],
})
export class ConformitiesModule {}
