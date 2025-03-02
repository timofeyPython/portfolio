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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const connect_1 = require("@db/connect");
const Service_1 = require("@modules/Service");
const constants_1 = require("@utils/constants");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class App extends Service_1.Service {
    constructor(options) {
        super();
        this.app = (0, express_1.default)();
        this.middleware = options.middleware;
        this.options = options;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.static(constants_1.folderPublicImages));
            this.app.use(express_1.default.urlencoded({ extended: true }));
            if (Array.isArray(this.middleware) && this.middleware.length > 0)
                this.middleware.forEach((param) => {
                    if (!Array.isArray(param))
                        this.app.use(param);
                    else
                        this.app.use(...param);
                });
            try {
                yield this.connectDatabase();
                this.getClientContent();
                this.app.listen(this.options.port, () => this.log(`Сервер работает на сервере ${this.options.port}`));
            }
            catch (e) {
                this.logE("Произошла ошибка, подробности:", e);
                this.logWrite({
                    message: `ERROR: не запустился сервер`,
                    router: "app",
                });
            }
        });
    }
    connectDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connect_1.sequelize.authenticate();
                yield connect_1.sequelize.sync();
                this.logWrite({
                    message: `Соединение с БД <${connect_1.sequelize.getDatabaseName()}> было успешно установлено`,
                    router: "app",
                    method: "",
                });
                this.log(`Соединение с БД <${connect_1.sequelize.getDatabaseName()}> было успешно установлено`);
            }
            catch (err) {
                this.logWrite({
                    message: `Ошибка при Соединение с БД <${connect_1.sequelize.getDatabaseName()}>, код ошибки ${err}`,
                    router: "app",
                });
                this.logE(`Ошибка при Соединение с БД <${connect_1.sequelize.getDatabaseName()}>, код ошибки ${err}`);
            }
        });
    }
    getClientContent() {
        try {
            const DIST_FOLDER = path_1.default.join(process.cwd(), process.env.CLIENT);
            if (fs_1.default.existsSync(DIST_FOLDER)) {
                if (!path_1.default.join(DIST_FOLDER, "index.html"))
                    this.logE("Не найден файл контента для клиентской части!");
                this.app.use(express_1.default.static(DIST_FOLDER));
                this.app.get("*", (req, res) => {
                    res.sendFile(path_1.default.join(DIST_FOLDER, "index.html"));
                });
                this.log("Клиентская часть активна");
            }
            else {
                this.logE("Клиентская часть не активна");
            }
        }
        catch (err) {
            this.logE("Клиентская часть не подтянута, код: ", err);
        }
    }
}
exports.App = App;
