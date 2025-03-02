import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { BranchesModule } from "src/branches/branches.module";
import { ConformitiesModule } from "src/conformities/conformities.module";
import { DepartamentsModule } from "src/departaments/departaments.module";
import { DivisionsModule } from "src/divisions/divisions.module";
import { GroupsModule } from "src/groups/groups.module";
import { RightsModule } from "src/rights/rights.module";
import { TasksModule } from "src/tasks/tasks.module";
import { UsersModule } from "src/users/users.module";
import { QuestionnaireModule } from "src/questionnaire/questionnaire.module";
import { databaseConfig } from "./database.config";
import { TaskCategoryModule } from "src/taskcategory/taskcategory.module";

@Module({
  imports: [
    databaseConfig(),
    TasksModule,
    UsersModule,
    AuthModule,
    BranchesModule,
    DepartamentsModule,
    DivisionsModule,
    GroupsModule,
    RightsModule,
    ConformitiesModule,
    QuestionnaireModule,
    TaskCategoryModule,
  ],
})
export class DatabaseModule {}
