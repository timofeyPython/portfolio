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
/* eslint-disable @typescript-eslint/no-unused-vars */
const Service_1 = require("@/libs/modules/Service");
const utils_1 = require("@/libs/utils");
class Works extends Service_1.Service {
    constructor({ router, type, model, pathFolder }) {
        super();
        this.router = router;
        this.type = type;
        this.model = model;
        this.pathFolder = pathFolder;
    }
    getAll(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            try {
                const result = (yield this.model.findAll()).map(({ img, id, sort }) => ({
                    id,
                    img,
                    sort,
                }));
                return res.json({ result });
            }
            catch (e) {
                next(this.internal(e.message));
            }
        });
    }
    create(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            try {
                const { sort } = req.body;
                const images = (0, utils_1.getArrayImages)(req.files);
                const lastEntry = yield this.model.findAndCountAll();
                for (let i = 0; i < images.length; i++) {
                    yield this.model.create({
                        img: images[i],
                        sort: sort ? sort : lastEntry.count + i + 1,
                    });
                }
                return res.json({
                    message: `${this.type} добавлены`,
                });
            }
            catch (e) {
                next(this.forbidden(e.message));
            }
        });
    }
    update(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const [req, res, next] = args;
            try {
                const { id, sort } = req.body;
                const enty = yield this.getEntry(id);
                if (!enty)
                    throw new Error("Не найдена запись");
                yield this.model.update({
                    img: (_a = (0, utils_1.getArrayImages)(req.files)) === null || _a === void 0 ? void 0 : _a[0],
                    sort,
                }, {
                    where: { id },
                });
                yield (0, utils_1.deleteFiles)({
                    files: [enty.img],
                    filesPath: this.pathFolder,
                    router: this.router,
                });
                return res.json({
                    message: `${this.type} ${id} обновлена`,
                });
            }
            catch (e) {
                next(this.forbidden(e.message));
            }
        });
    }
    delete(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            try {
                const { id } = req.params;
                const enty = yield this.getEntry(id);
                if (!enty)
                    throw new Error("Не найдена запись");
                yield this.model.destroy({ where: { id: enty.id } });
                yield (0, utils_1.deleteFiles)({
                    files: [enty.img],
                    filesPath: this.pathFolder,
                    router: this.router,
                });
                return res.json({
                    message: `${this.type} ${id} удалена`,
                });
            }
            catch (e) {
                next(this.forbidden(e.message));
            }
        });
    }
    getEntry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const entry = yield this.model.findOne({ where: { id: `${id}` } });
            return entry;
        });
    }
}
exports.default = Works;
