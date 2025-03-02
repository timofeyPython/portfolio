import { ConfigService } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";

export const databaseConfig = () =>
  SequelizeModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      return {
        dialect: configService.get<"postgres" | "mysql">("DB_DIALECT"),
        host: configService.get<string>("DB_HOST"),
        port: configService.get<number>("DB_PORT"),
        username: configService.get<string>("DB_USER"),
        password: configService.get<string>("DB_PASS"),
        database: configService.get<string>("DB_NAME"),
        autoLoadModels: true,
        synchronize: true,
        logging: false,
      };
    },
  });
