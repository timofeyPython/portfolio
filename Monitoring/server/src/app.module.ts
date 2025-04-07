import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./lib/config/database/database.module";
import { dotEnvPath } from "./lib/config/configuration";
import { GroupConfModule } from "./group-conf/group-conf.module";
import { UsersModule } from "./user/user.module";
import { GroupsModule } from "./groups/groups.module";
import { TasksModule } from "./tasks/tasks.module";
import { TaskCategoryModule } from "./task-category/task-category.module";
import { AuthModule } from "./auth/auth.module";
import { RightsGroupConfModule } from "./rights-group/rights-group.module";
import { RightsModule } from './rights-user/rights-user.module';
import { UserConfModule } from './user-conf/user-conf.module';
import { AdminModule } from './admin/admin.module';
import { MailerModule } from './mailer/mailer.module';
import { QuestionnaireModule } from "./questionnaire/questionnaire.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: dotEnvPath,
    }),
    DatabaseModule,
    GroupConfModule,
    UsersModule,
    GroupsModule,
    TasksModule,
    TaskCategoryModule,
    AuthModule,
    RightsGroupConfModule,
    RightsModule,
    UserConfModule,
    AdminModule,
    MailerModule,
    QuestionnaireModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
