import express from "express";
import { Express } from "express-serve-static-core";
import { IAppOptions } from "@types_/modules";
import { sequelize } from "@db/connect";
import { Service } from "@modules/Service";
import { folderPublicImages } from "@utils/constants";
import fs from "fs";
import path from "path";

export class App extends Service {
  app: Express;
  options: IAppOptions;
  middleware;

  constructor(options: IAppOptions) {
    super();
    this.app = express();
    this.middleware = options.middleware;
    this.options = options;
  }

  async start() {
    this.app.use(express.json());
    this.app.use("/api/images/", express.static(folderPublicImages));
    this.app.use(express.urlencoded({ extended: true }));

    if (Array.isArray(this.middleware) && this.middleware.length > 0)
      this.middleware.forEach((param) => {
        if (!Array.isArray(param)) this.app.use(param);
        else this.app.use(...param);
      });
    try {
      await this.connectDatabase();
      // this.getClientContent();
      this.app.listen(this.options.port, () =>
        this.log(`Сервер работает на сервере ${this.options.port}`)
      );
    } catch (e) {
      this.logE("Произошла ошибка, подробности:", e);
      this.logWrite({
        message: `ERROR: не запустился сервер`,
        router: "app",
      });
    }
  }

  async connectDatabase() {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      this.logWrite({
        message: `Соединение с БД <${sequelize.getDatabaseName()}> было успешно установлено`,
        router: "app",
        method: "",
      });
      this.log(
        `Соединение с БД <${sequelize.getDatabaseName()}> было успешно установлено`
      );
    } catch (err) {
      this.logWrite({
        message: `Ошибка при Соединение с БД <${sequelize.getDatabaseName()}>, код ошибки ${err}`,
        router: "app",
      });
      this.logE(
        `Ошибка при Соединение с БД <${sequelize.getDatabaseName()}>, код ошибки ${err}`
      );
    }
  }

  getClientContent() {
    try {
      const DIST_FOLDER = path.join(process.cwd(), process.env.CLIENT);
      if (fs.existsSync(DIST_FOLDER)) {
        if (!path.join(DIST_FOLDER, "index.html"))
          this.logE("Не найден файл контента для клиентской части!");
        this.app.use(express.static(DIST_FOLDER));
        this.app.get("*", (req, res) => {
          res.sendFile(path.join(DIST_FOLDER, "index.html"));
        });
        this.log("Клиентская часть активна");
      } else {
        this.logE("Клиентская часть не активна");
      }
    } catch (err) {
      this.logE("Клиентская часть не подтянута, код: ", err);
    }
  }
}
