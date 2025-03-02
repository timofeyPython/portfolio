"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const moment_1 = __importDefault(require("moment"));
const index_1 = require("@utils/index");
class Log {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static log(...args) {
        return console.log(...args);
    }
    static write(object_1) {
        return __awaiter(this, arguments, void 0, function* (object, succes = true) {
            const nameLog = `${(0, moment_1.default)(new Date()).format("DDMMYYYY")}.log`;
            const nameFolderYear = `${new Date().getFullYear()}`;
            const month = `${new Date().getMonth() + 1}`;
            const nameFolderStatus = succes ? "succes" : "error";
            const pathLog = path_1.default.resolve(__dirname, "../../../", "logs");
            try {
                this.mkDir(path_1.default.resolve(pathLog, nameFolderYear, nameFolderStatus, month), () => this.appendFile(path_1.default.resolve(pathLog, nameFolderYear, nameFolderStatus, month, nameLog), object));
            }
            catch (e) {
                this.log("ERROR: Проблема с записью ЛОГОВ", e);
            }
        });
    }
    static mkDir(folderPath, callback) {
        fs.mkdir(folderPath, { recursive: true }, (err) => {
            if (err) {
                if (err.code === "EEXIST") {
                    console.error(`Папка ${folderPath} уже существует.`);
                }
                else {
                    return callback(err);
                }
            }
            callback(null);
        });
    }
    static appendFile(path, { router, message, method }) {
        fs.appendFile(path, `Время: ${(0, index_1.dateToIsoString)(new Date())}| Маршрут: ${router} | Метод: ${method} | Сообщение: ${message} |\n`, (error) => {
            if (error)
                throw error;
            this.log(`OK: Лог записан, маршрут: ${router}`);
        });
    }
}
exports.Log = Log;
