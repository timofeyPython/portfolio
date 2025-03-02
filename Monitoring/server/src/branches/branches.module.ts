import { Module } from "@nestjs/common";
import { BranchesController } from "./branches.controller";
import { BranchesService } from "./branches.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Branches } from "./branches.model";

@Module({
  imports: [SequelizeModule.forFeature([Branches])],
  controllers: [BranchesController],
  providers: [BranchesService],
})
export class BranchesModule {}
