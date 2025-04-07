import { Module } from "@nestjs/common";
import { GroupsService } from "./groups.service";
import { GroupsController } from "./groups.controller";
import { groupsProvider } from "./groups.providers";
import { groupConfProviders } from "@src/group-conf/group-conf.provider";
import { MailerService } from "@src/mailer/mailer.service";
import { TasksModule } from "@src/tasks/tasks.module";
import { TasksService } from "@src/tasks/tasks.service";

@Module({
  controllers: [GroupsController],
  providers: [
    GroupsService,
    MailerService,
    ...groupsProvider,
    ...groupConfProviders,
    TasksService,
  ],
  imports: [TasksModule],
  exports: [GroupsModule, TasksModule, MailerService],
})
export class GroupsModule {}
