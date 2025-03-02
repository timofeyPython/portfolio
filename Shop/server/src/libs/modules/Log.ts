import * as fs from "fs";
import path from "path";
import moment from "moment";
import { dateToIsoString } from "@utils/index";
import { ILogWriteOptions } from "@/types/modules";

export class Log {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static log(...args: Array<any>) {
    return console.log(...args);
  }
  static async write(object: ILogWriteOptions, succes = true) {
    const nameLog = `${moment(new Date()).format("DDMMYYYY")}.log`;
    const nameFolderYear = `${new Date().getFullYear()}`;
    const month = `${new Date().getMonth() + 1}`;
    const nameFolderStatus = succes ? "succes" : "error";
    const pathLog = path.resolve(__dirname, "../../../", "logs");

    try {
      this.mkDir(
        path.resolve(pathLog, nameFolderYear, nameFolderStatus, month),
        () =>
          this.appendFile(
            path.resolve(
              pathLog,
              nameFolderYear,
              nameFolderStatus,
              month,
              nameLog
            ),
            object
          )
      );
    } catch (e) {
      this.log("ERROR: Проблема с записью ЛОГОВ", e);
    }
  }

  private static mkDir(folderPath: string, callback) {
    fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        if (err.code === "EEXIST") {
          console.error(`Папка ${folderPath} уже существует.`);
        } else {
          return callback(err);
        }
      }
      callback(null);
    });
  }

  private static appendFile(
    path: string,
    { router, message, method }: ILogWriteOptions
  ) {
    fs.appendFile(
      path,
      `Время: ${dateToIsoString(new Date())}| Маршрут: ${router} | Метод: ${method} | Сообщение: ${message} |\n`,
      (error) => {
        if (error) throw error;
        this.log(`OK: Лог записан, маршрут: ${router}`);
      }
    );
  }
}
