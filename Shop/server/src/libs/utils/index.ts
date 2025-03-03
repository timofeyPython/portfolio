/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IControllersOptions } from "@/types/controllers";
import * as jwt from "jsonwebtoken";
import { ApiError } from "../modules/Error";
import multer from "multer";
import fs from "fs";
import { unlink } from "fs/promises";
import { Log } from "../modules/Log";
import { v4 as uuidv4 } from "uuid";

export function dateToIsoString(date: Date) {
  const tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? "+" : "-",
    pad = function (num: number) {
      const norm = Math.floor(Math.abs(num));
      return (norm < 10 ? "0" : "") + norm;
    };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    dif +
    pad(tzo / 60) +
    ":" +
    pad(tzo % 60)
  );
}

export const generateJwt = ({ id, email, role }) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: `${+process.env.LIVE_TOKEN}h`,
  });
};

export const checkJwt = (token: string) => {
  if (!token.split(" ")?.[1]) return false;
  try {
    const bearer = token.split(" ")[1];
    const check = jwt.verify(bearer, process.env.SECRET_KEY);
    return check;
  } catch {
    return false;
  }
};

export function checkParamBody(Dto: any) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: IControllersOptions) {
      const [req, res, next, options] = args;
      const dto = new Dto(req.body);
      const arrErr: Array<string> = [];

      for (const key in dto) {
        if (!dto[key].status) {
          arrErr.push(`${key}: ${dto[key].value}`);
        }
      }

      if (arrErr.length > 0)
        return next(ApiError.badRequest(arrErr.join(", ")));

      return originalMethod.apply(this, args, options);
    };

    return descriptor;
  };
}

export function checkValue(key: any, type: "string" | "boolean" | "number") {
  const object = {
    value: "",
    status: false,
  };
  if (typeof key === type) {
    object.value = key;
    object.status = true;
  } else if (type === "number" && !isNaN(+key)) {
    object.value = key;
    object.status = true;
  } else if (!key) {
    object.value = "Не передано значения для свойства";
    object.status = false;
  } else {
    object.value = `Передано не правильное значения для свойства для типа <${type}>`;
    object.status = false;
  }
  return object;
}

export function uploadFiles(
  key: string,
  folder: "products" | "reviews" | "works",
  array?: boolean
) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./public/images/${folder}`); // Директория для сохранения файлов
    },
    filename: (req, file, cb) => {
      cb(null, uuidv4() + ".jpg"); // Имя файла
    },
  });
  const upload = multer({ storage });
  if (!array) upload.single(key);
  return upload.array(key);
}

export async function deleteFiles({
  files,
  filesPath,
  router,
}: {
  files: Array<string>;
  filesPath: string;
  router: string;
}) {
  try {
    files.forEach((img) => {
      if (fs.existsSync(`${filesPath}/${img}`)) {
        (async function (path) {
          try {
            await unlink(path);
            Log.write({
              message: `Файл ${img} удален, путь ${filesPath}`,
              router,
            });
          } catch (error) {
            Log.write({
              message: `Файл не удален ! Ошибка ${error}`,
              router,
            });
          }
        })(`${filesPath}/${img}`);
      } else {
        Log.write(
          {
            message: `Не найден путь для удаления файла ${img} путь ${filesPath}`,
            router,
          },
          false
        );
      }
    });
  } catch (e) {
    Log.write(
      {
        message: `Произошла ошибка в удалении файла! Ошибка ${e?.message}`,
        router,
      },
      false
    );
  }
}

export const getArrayImages = (images: any) => {
  const result = [];
  if (Array.isArray(images))
    images.forEach((file) => result.push(file.filename));
  return result;
};

export const parseArray = (value: any, defaultVal?: any) => {
  if (value && Array.isArray(JSON.parse(value))) {
    return JSON.parse(value);
  } else {
    return defaultVal ? defaultVal : value;
  }
};
