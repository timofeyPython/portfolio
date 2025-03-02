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
/* eslint-disable @typescript-eslint/no-explicit-any */
const models_1 = require("@/libs/database/models");
const Service_1 = require("@/libs/modules/Service");
const utils_1 = require("@/libs/utils");
const product_1 = require("./dto/product");
const constants_1 = require("@/libs/utils/constants");
const sequelize_1 = require("sequelize");
class Products extends Service_1.Service {
    constructor() {
        super();
        this.router = "products";
    }
    create(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            try {
                const { name, price, location_lighting, depth_mirror, general_depth_production, width_frame, type_fixation, number_light, description, typeCategoryId, typeLightingId, typeColorTemperatureId, typeMaterialId, colorFrameId, width, height, } = req.body;
                const entry = yield models_1.models.Product.create({
                    name,
                    price,
                    location_lighting,
                    depth_mirror,
                    general_depth_production,
                    width_frame,
                    type_fixation,
                    number_light,
                    description,
                    images: {
                        result: (0, utils_1.getArrayImages)(req.files),
                    },
                    typeCategoryId,
                    typeLightingId,
                    typeColorTemperatureId,
                    typeMaterialId,
                    colorFrameId,
                    width,
                    height,
                });
                return res.json({
                    message: `Позиция ${name} добавлена`,
                    entry,
                });
            }
            catch (e) {
                next(this.forbidden(e.message));
            }
        });
    }
    update(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            try {
                const { name, price, location_lighting, depth_mirror, general_depth_production, width_frame, type_fixation, number_light, description, typeCategoryId, typeLightingId, typeColorTemperatureId, typeMaterialId, colorFrameId, id, width, height, deletesIMG, } = req.body;
                yield models_1.models.Product.update({
                    name,
                    price,
                    location_lighting,
                    depth_mirror,
                    general_depth_production,
                    width_frame,
                    type_fixation,
                    number_light,
                    description,
                    images: {
                        result: (0, utils_1.getArrayImages)(req.files),
                    },
                    typeCategoryId,
                    typeLightingId,
                    typeColorTemperatureId,
                    typeMaterialId,
                    colorFrameId,
                    width,
                    height,
                }, { where: { id } });
                yield (0, utils_1.deleteFiles)({
                    files: JSON.parse(deletesIMG),
                    filesPath: constants_1.folderImagesProducts,
                    router: this.router,
                });
                return res.json({
                    message: "Позиция обновлена",
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
                const { id } = req.body;
                const entry = yield models_1.models.Product.findOne({ where: { id } });
                if (!entry)
                    next(this.badRequest("Данная запись отсутсвует!"));
                yield entry.destroy();
                yield (0, utils_1.deleteFiles)({
                    files: entry.images.result,
                    filesPath: constants_1.folderImagesProducts,
                    router: this.router,
                });
                return res.json({
                    message: `Запись #${id} удалена`,
                });
            }
            catch (e) {
                next(this.forbidden(e.message));
            }
        });
    }
    getAll(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const [req, res, next] = args;
            try {
                const { price, categoryId, lightId, colorTempId, materialId } = req.query;
                const page = +((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
                const limit = +(req === null || req === void 0 ? void 0 : req.query.limit) || 8;
                const offset = page * limit - limit;
                const currentPrice = (0, utils_1.parseArray)(price, [0, 1111111]);
                const options = {
                    where: { price: { [sequelize_1.Op.between]: [currentPrice[0], currentPrice[1]] } },
                    offset,
                    limit,
                    include: [
                        { model: models_1.models.TypeCategories, required: false },
                        { model: models_1.models.TypeLighting, required: false },
                        { model: models_1.models.TypeColorTemperature, required: false },
                        { model: models_1.models.TypeMaterial, required: false },
                        { model: models_1.models.ColorFrame, required: false },
                    ],
                    order: [["id", "DESC"]],
                };
                if (categoryId)
                    options.where.typeCategoryId = (0, utils_1.parseArray)(categoryId);
                if (lightId)
                    options.where.typeLightingId = (0, utils_1.parseArray)(lightId);
                if (colorTempId)
                    options.where.typeColorTemperatureId = (0, utils_1.parseArray)(colorTempId);
                if (materialId)
                    options.where.typeMaterialId = (0, utils_1.parseArray)(materialId);
                const entries = yield models_1.models.Product.findAndCountAll(options);
                return res.json({
                    entries: entries.rows.map((entry) => this.getProduct(entry)),
                    count: entries.count,
                });
            }
            catch (e) {
                return next(this.internal(`Ошибка при получении данных, подроности: ${e === null || e === void 0 ? void 0 : e.message}`));
            }
        });
    }
    getOne(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            try {
                const { id } = req.params;
                const entry = yield models_1.models.Product.findOne({
                    where: { id },
                    include: [
                        { model: models_1.models.TypeCategories, required: false },
                        { model: models_1.models.TypeLighting, required: false },
                        { model: models_1.models.TypeColorTemperature, required: false },
                        { model: models_1.models.TypeMaterial, required: false },
                        { model: models_1.models.ColorFrame, required: false },
                    ],
                    order: [["id", "ASC"]],
                });
                return res.json({
                    entry: entry && this.getProduct(entry, true),
                });
            }
            catch (e) {
                return next(this.badRequest(`Ошибка в получении данных, ошибка: ${e === null || e === void 0 ? void 0 : e.message}`));
            }
        });
    }
    getProduct({ id, location_lighting, depth_mirror, general_depth_production, width_frame, type_fixation, number_light, description, width, height, images, color_frame, type_category, type_lighting, type_color_temperature, type_material, name, price, }, all) {
        if (all)
            return {
                id,
                name,
                price,
                locationLighting: location_lighting,
                depthMirror: depth_mirror,
                generalDepthProduction: general_depth_production,
                widthFrame: width_frame,
                typeFixation: type_fixation,
                numberLight: number_light,
                description,
                images,
                width,
                height,
                types: {
                    frame: {
                        id: color_frame === null || color_frame === void 0 ? void 0 : color_frame.id,
                        name: color_frame === null || color_frame === void 0 ? void 0 : color_frame.name,
                    },
                    category: {
                        id: type_category === null || type_category === void 0 ? void 0 : type_category.id,
                        name: type_category === null || type_category === void 0 ? void 0 : type_category.name,
                    },
                    lighting: {
                        id: type_lighting === null || type_lighting === void 0 ? void 0 : type_lighting.id,
                        name: type_lighting === null || type_lighting === void 0 ? void 0 : type_lighting.name,
                    },
                    colorTemperature: {
                        id: type_color_temperature === null || type_color_temperature === void 0 ? void 0 : type_color_temperature.id,
                        name: type_color_temperature === null || type_color_temperature === void 0 ? void 0 : type_color_temperature.name,
                    },
                    material: {
                        id: type_material === null || type_material === void 0 ? void 0 : type_material.id,
                        name: type_material === null || type_material === void 0 ? void 0 : type_material.name,
                    },
                },
            };
        else
            return {
                id,
                name,
                price,
                images,
            };
    }
}
__decorate([
    (0, utils_1.checkParamBody)(product_1.DtoProductCreate),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Products.prototype, "create", null);
__decorate([
    (0, utils_1.checkParamBody)(product_1.DtoProductUpdate),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Products.prototype, "update", null);
__decorate([
    (0, utils_1.checkParamBody)(product_1.DtoProductDelete),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Products.prototype, "delete", null);
exports.default = Products;
