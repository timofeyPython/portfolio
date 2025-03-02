/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiError } from "@modules/Error";
import { Log } from "./Log";
import { IServiceLogWriteOptions } from "@/types/modules";

export class Service {
  log(...text: Array<any>) {
    return Log.log("OK:", ...text);
  }

  logE(...text: Array<any>) {
    return Log.log("ERR:", ...text);
  }

  async logWrite(object: IServiceLogWriteOptions, succes = true) {
    return await Log.write(object, succes);
  }

  badRequest(message: string) {
    return ApiError.badRequest(message);
  }

  forbidden(message: string) {
    return ApiError.forbidden(message);
  }
  internal(message: string) {
    return ApiError.internal(message);
  }
}
