"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const Error_1 = require("@modules/Error");
const Log_1 = require("./Log");
class Service {
    log(...text) {
        return Log_1.Log.log("OK:", ...text);
    }
    logE(...text) {
        return Log_1.Log.log("ERR:", ...text);
    }
    logWrite(object_1) {
        return __awaiter(this, arguments, void 0, function* (object, succes = true) {
            return yield Log_1.Log.write(object, succes);
        });
    }
    badRequest(message) {
        return Error_1.ApiError.badRequest(message);
    }
    forbidden(message) {
        return Error_1.ApiError.forbidden(message);
    }
    internal(message) {
        return Error_1.ApiError.internal(message);
    }
}
exports.Service = Service;
