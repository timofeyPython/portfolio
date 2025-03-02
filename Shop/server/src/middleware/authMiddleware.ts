import { ApiError } from "@/libs/modules/Error";
import * as jwt from "jsonwebtoken";

export default function (req, res, next) {
  if (req.method === "OPTIONS") next();
  try {
    const token = req?.headers?.authorization.split(" ")?.[1];
    if (!token) {
      return next(ApiError.unauthorized("Пользователь не авторизован!"));
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    return next(ApiError.unauthorized(`Пользователь <${req.ip}> не авторизован!  `));
  }
}
