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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const Service_1 = require("@/libs/modules/Service");
const types_1 = require("./dto/types");
const utils_1 = require("@/libs/utils");
const models_1 = require("@db/models");
class Types extends Service_1.Service {
    createType(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next, options] = args;
            try {
                const { name } = req.body;
                const type = yield options.model.create({ name });
                this.logWrite({
                    message: `${options.categoryTitle} "${name}"`,
                    router: req.url,
                });
                return res.json({
                    message: `${options.categoryTitle} "${name}"`,
                    entry: type,
                });
            }
            catch (e) {
                return next(this.internal(e === null || e === void 0 ? void 0 : e.message));
            }
        });
    }
    updateType(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next, options] = args;
            try {
                const { id, name } = req.body;
                yield options.model.update({ name }, { where: { id } });
                this.logWrite({
                    message: `${options.categoryTitle} "${name}"`,
                    router: req.url,
                });
                return res.json({
                    message: `${options.categoryTitle} "${name}"`,
                });
            }
            catch (e) {
                return next(this.internal(e === null || e === void 0 ? void 0 : e.message));
            }
        });
    }
    deleteType(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next, options] = args;
            try {
                const { id } = req.body;
                yield options.model.destroy({ where: { id } });
                this.logWrite({
                    message: `${options.categoryTitle} "${id}"`,
                    router: req.url,
                });
                return res.json({
                    message: `${options.categoryTitle} "${id}"`,
                });
            }
            catch (e) {
                return next(this.internal(e === null || e === void 0 ? void 0 : e.message));
            }
        });
    }
    getType(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next, options] = args;
            try {
                const types = yield options.model.findAll({
                    order: [["name", "ASC"]],
                });
                return res.json(types);
            }
            catch (e) {
                next(this.internal(e === null || e === void 0 ? void 0 : e.message));
            }
        });
    }
    createCategory(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createType(...args, {
                categoryTitle: "Создана категория с именем",
                model: models_1.models.TypeCategories,
            });
        });
    }
    createTypeLight(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createType(...args, {
                categoryTitle: "Создан тип освещение c именем",
                model: models_1.models.TypeLighting,
            });
        });
    }
    createTypeColorTemp(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createType(...args, {
                categoryTitle: "Созда тип цветового освещение с именем",
                model: models_1.models.TypeColorTemperature,
            });
        });
    }
    createTypeMaterial(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createType(...args, {
                categoryTitle: "Созда тип материала с именем",
                model: models_1.models.TypeMaterial,
            });
        });
    }
    createColorFrame(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createType(...args, {
                categoryTitle: "Создан тип рамы с именем",
                model: models_1.models.ColorFrame,
            });
        });
    }
    updateTypeCategory(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.updateType(...args, {
                categoryTitle: "Обновлена категория",
                model: models_1.models.TypeCategories,
            });
        });
    }
    updateTypeLight(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.updateType(...args, {
                categoryTitle: "Обновлен тип освещение",
                model: models_1.models.TypeLighting,
            });
        });
    }
    updateTypeColorTemp(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.updateType(...args, {
                categoryTitle: "Обновлен тип цветового освещение с именем",
                model: models_1.models.TypeColorTemperature,
            });
        });
    }
    updateTypeMaterial(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.updateType(...args, {
                categoryTitle: "Обновлен тип материала",
                model: models_1.models.TypeMaterial,
            });
        });
    }
    updateColorFrame(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.updateType(...args, {
                categoryTitle: "Обновлен цвет рамы",
                model: models_1.models.ColorFrame,
            });
        });
    }
    deleteTypeCategory(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deleteType(...args, {
                categoryTitle: "Удалена категория",
                model: models_1.models.TypeCategories,
            });
        });
    }
    deleteTypeLight(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deleteType(...args, {
                categoryTitle: "Удален тип освещение",
                model: models_1.models.TypeLighting,
            });
        });
    }
    deleteTypeColorTemp(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deleteType(...args, {
                categoryTitle: "Удален тип цветового освещение",
                model: models_1.models.TypeColorTemperature,
            });
        });
    }
    deleteTypeMaterial(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deleteType(...args, {
                categoryTitle: "Удален тип материала",
                model: models_1.models.TypeMaterial,
            });
        });
    }
    deleteColorFrame(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deleteType(...args, {
                categoryTitle: "Удален цвет рамы",
                model: models_1.models.ColorFrame,
            });
        });
    }
    getCategory(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getType(...args, {
                model: models_1.models.TypeCategories,
            });
        });
    }
    getTypeLight(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getType(...args, {
                model: models_1.models.TypeLighting,
            });
        });
    }
    getTypeColorTemp(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getType(...args, {
                model: models_1.models.TypeColorTemperature,
            });
        });
    }
    getTypeMaterial(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getType(...args, {
                model: models_1.models.TypeMaterial,
            });
        });
    }
    getColorFrame(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getType(...args, {
                model: models_1.models.ColorFrame,
            });
        });
    }
}
__decorate([
    (0, utils_1.checkParamBody)(types_1.DtoCreateType),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Types.prototype, "createType", null);
__decorate([
    (0, utils_1.checkParamBody)(types_1.DtoUpdateType),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Types.prototype, "updateType", null);
__decorate([
    (0, utils_1.checkParamBody)(types_1.DtoDeleteType),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Types.prototype, "deleteType", null);
exports.default = Types;
