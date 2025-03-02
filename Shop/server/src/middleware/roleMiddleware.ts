/* eslint-disable @typescript-eslint/no-unused-vars */
 import { ApiError } from "@/libs/modules/Error";
import { IControllersOptions } from "@/types/controllers";

export default function (role: "ADMIN" | "USER") {
  return function(...args: IControllersOptions) {
    const [req, res, next] = args;
    if (req.user.role === role) return next();
    return next(ApiError.unauthorized("Нет прав для данного действия!"))
  };
}
