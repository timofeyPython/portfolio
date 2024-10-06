import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Groups } from './groups.model';
import { GroupsController } from './groups.controller';

@Module({
  imports: [SequelizeModule.forFeature([Groups])],
  controllers: [GroupsController],
  providers: [GroupsService],
 
})
export class GroupsModule {}
