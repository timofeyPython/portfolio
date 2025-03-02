import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Users } from "./users.model";

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
