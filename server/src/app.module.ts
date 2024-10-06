import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbconnection } from './config/dbconnection';
import { TasksModule } from './tasks/tasks.module'; 
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BranchesModule } from './branches/branches.module';
import { DepartamentsModule } from './departaments/departaments.module';
import { DivisionsModule } from './divisions/divisions.module';
import { GroupsModule } from './groups/groups.module';
import { RightsModule } from './rights/rights.module';
import { ConformitiesModule } from './conformities/conformities.module';
 
import configuration from './config/configuration'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
      load: [configuration]
    }),
    dbconnection,
    TasksModule,
    UsersModule,
    AuthModule,
    BranchesModule,
    DepartamentsModule,
    DivisionsModule,
    GroupsModule,
    RightsModule,
    ConformitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
 