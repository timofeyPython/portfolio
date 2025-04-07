import { Sequelize } from "sequelize-typescript";
import { ConfigService } from "@nestjs/config";
import { GroupConf } from "@src/group-conf/group-conf.model";
import { Users } from "@src/user/user.model";
import { Groups } from "@src/groups/groups.model";
import { RightsGroups } from "@src/rights-group/rights-group.model";
import { Tasks } from "@src/tasks/tasks.model";
import { TaskCategory } from "@src/task-category/task-category.model";
import { RightsUsers } from "@src/rights-user/rights-user.model";
import { UsersConf } from "@src/user-conf/user-conf.model";
import { Questionnaire } from "@src/questionnaire/questionnaire.model";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: configService.get<"postgres" | "mysql">("DB_DIALECT"),
        host: configService.get<string>("DB_HOST"),
        port: configService.get<number>("DB_PORT"),
        username: configService.get<string>("DB_USER"),
        password: configService.get<string>("DB_PASS"),
        database: configService.get<string>("DB_NAME"),
        logging: false,
      });

      sequelize.addModels([
        GroupConf,
        Users,
        Groups,
        RightsGroups,
        Tasks,
        TaskCategory,
        RightsUsers,
        UsersConf,
        Questionnaire,
      ]);
      sequelize.sync();
      return sequelize;
    },
  },
];
