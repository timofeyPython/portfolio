"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const Service_1 = require("@/libs/modules/Service");
const models_1 = require("@/libs/database/models");
const index_1 = require("@utils/index");
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("./dto/user");
class UserController extends Service_1.Service {
    constructor() {
        super();
    }
    registration(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            const enable = true;
            if (enable) {
                try {
                    const { email, password } = req.body;
                    if (!email || !password) {
                        return next(this.forbidden("Некорректный email или password"));
                    }
                    const candidate = yield models_1.models.User.findOne({ where: { email } });
                    if (candidate) {
                        return next(this.forbidden("Пользователь с таким email уже сущевствует"));
                    }
                    const hashPassword = yield bcrypt_1.default.hash(password, 5);
                    const user = yield models_1.models.User.create({
                        email,
                        password: hashPassword,
                    });
                    const token = (0, index_1.generateJwt)(user);
                    return res.json({ token });
                }
                catch (err) {
                    return next(this.internal(err === null || err === void 0 ? void 0 : err.message));
                }
            }
            else {
                return res.status(404).json({ message: "Регистрация отключена Админом" });
            }
        });
    }
    login(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return next(this.badRequest("Введите корректные данные!"));
                }
                const user = yield models_1.models.User.findOne({ where: { email } });
                if (!user) {
                    return next(this.forbidden("Не верные учётные данные!"));
                }
                const comparePassword = bcrypt_1.default.compareSync(password, user.password);
                if (!comparePassword) {
                    return next(this.forbidden("Не верные учётные данные"));
                }
                const token = (0, index_1.generateJwt)(user);
                this.logWrite({
                    message: `${email} зашёл на сайт его ip ${req.socket.remoteAddress}!`,
                    router: req.url,
                });
                return res.json({ token });
            }
            catch (err) {
                return next(this.internal(err === null || err === void 0 ? void 0 : err.message));
            }
        });
    }
    check(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const [req, res, next] = args;
            const token = (0, index_1.generateJwt)(req.user);
            try {
                res.json({
                    token,
                    user: {
                        role: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.role,
                        email: (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.email,
                    },
                });
            }
            catch (e) {
                return next(this.internal(e === null || e === void 0 ? void 0 : e.message));
            }
        });
    }
}
__decorate([
    (0, index_1.checkParamBody)(user_1.DtoUserRegistration),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registration", null);
__decorate([
    (0, index_1.checkParamBody)(user_1.DtoUserLogin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.default = UserController;
