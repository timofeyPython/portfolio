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
exports.parseArray = exports.getArrayImages = exports.generateJwt = void 0;
exports.dateToIsoString = dateToIsoString;
exports.checkParamBody = checkParamBody;
exports.checkValue = checkValue;
exports.uploadFiles = uploadFiles;
exports.deleteFiles = deleteFiles;
const jwt = __importStar(require("jsonwebtoken"));
const Error_1 = require("../modules/Error");
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const promises_1 = require("fs/promises");
const Log_1 = require("../modules/Log");
const uuid_1 = require("uuid");
function dateToIsoString(date) {
    const tzo = -date.getTimezoneOffset(), dif = tzo >= 0 ? "+" : "-", pad = function (num) {
        const norm = Math.floor(Math.abs(num));
        return (norm < 10 ? "0" : "") + norm;
    };
    return (date.getFullYear() +
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
        pad(tzo % 60));
}
const generateJwt = ({ id, email, role }) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: `${+process.env.LIVE_TOKEN}h`,
    });
};
exports.generateJwt = generateJwt;
function checkParamBody(Dto) {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const [req, res, next, options] = args;
            const dto = new Dto(req.body);
            const arrErr = [];
            for (const key in dto) {
                if (!dto[key].status) {
                    arrErr.push(`${key}: ${dto[key].value}`);
                }
            }
            if (arrErr.length > 0)
                return next(Error_1.ApiError.badRequest(arrErr.join(", ")));
            return originalMethod.apply(this, args, options);
        };
        return descriptor;
    };
}
function checkValue(key, type) {
    const object = {
        value: "",
        status: false,
    };
    if (typeof key === type) {
        object.value = key;
        object.status = true;
    }
    else if (type === "number" && !isNaN(+key)) {
        object.value = key;
        object.status = true;
    }
    else if (!key) {
        object.value = "Не передано значения для свойства";
        object.status = false;
    }
    else {
        object.value = `Передано не правильное значения для свойства для типа <${type}>`;
        object.status = false;
    }
    return object;
}
function uploadFiles(key, folder, array) {
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `./public/images/${folder}`); // Директория для сохранения файлов
        },
        filename: (req, file, cb) => {
            cb(null, (0, uuid_1.v4)() + ".jpg"); // Имя файла
        },
    });
    const upload = (0, multer_1.default)({ storage });
    if (!array)
        upload.single(key);
    return upload.array(key);
}
function deleteFiles(_a) {
    return __awaiter(this, arguments, void 0, function* ({ files, filesPath, router, }) {
        try {
            files.forEach((img) => {
                if (fs_1.default.existsSync(`${filesPath}/${img}`)) {
                    (function (path) {
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                yield (0, promises_1.unlink)(path);
                                Log_1.Log.write({
                                    message: `Файл ${img} удален, путь ${filesPath}`,
                                    router,
                                });
                            }
                            catch (error) {
                                Log_1.Log.write({
                                    message: `Файл не удален ! Ошибка ${error}`,
                                    router,
                                });
                            }
                        });
                    })(`${filesPath}/${img}`);
                }
                else {
                    Log_1.Log.write({
                        message: `Не найден путь для удаления файла ${img} путь ${filesPath}`,
                        router,
                    }, false);
                }
            });
        }
        catch (e) {
            Log_1.Log.write({
                message: `Произошла ошибка в удалении файла! Ошибка ${e === null || e === void 0 ? void 0 : e.message}`,
                router,
            }, false);
        }
    });
}
const getArrayImages = (images) => {
    const result = [];
    if (Array.isArray(images))
        images.forEach((file) => result.push(file.filename));
    return result;
};
exports.getArrayImages = getArrayImages;
const parseArray = (value, defaultVal) => {
    if (value && Array.isArray(JSON.parse(value))) {
        return JSON.parse(value);
    }
    else {
        return defaultVal ? defaultVal : value;
    }
};
exports.parseArray = parseArray;
