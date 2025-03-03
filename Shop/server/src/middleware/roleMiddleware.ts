/* eslint-disable @typescript-eslint/no-unused-vars */
 import { ApiError } from "@/libs/modules/Error";
import { checkJwt } from "@/libs/utils";
import { IControllersOptions } from "@/types/controllers";

export default function (role: "ADMIN" | "USER") {
  return function(...args: IControllersOptions) {
    const [req, res, next] = args;
    const check = checkJwt(req.headers.authorization);
    if (!check) return next(ApiError.unauthorized("Не авторизован!"))
    if (typeof check !== "string" && check.role === role) return next();
    return next(ApiError.unauthorized("Нет прав для данного действия!"))
  };
}
