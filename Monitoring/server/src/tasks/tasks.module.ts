import { forwardRef, Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { tasksProviders } from "./tasks.provider";
import { MailerService } from "@src/mailer/mailer.service";
import { UserService } from "@src/user/user.service";
import { userProviders } from "@src/user/user.providers";
import { GroupsService } from "@src/groups/groups.service";
import { groupsProvider } from "@src/groups/groups.providers";
import { groupConfProviders } from "@src/group-conf/group-conf.provider";
import { GroupConfService } from "@src/group-conf/group-conf.service";

@Module({
  providers: [
    TasksService,
    MailerService,
    UserService,
    GroupsService,
    GroupConfService,
    ...groupsProvider,
    ...groupConfProviders,
    ...tasksProviders,
    ...userProviders,
  ],
  controllers: [TasksController],
  exports: [TasksModule, ...tasksProviders, ...userProviders, UserService],
})
export class TasksModule {}
