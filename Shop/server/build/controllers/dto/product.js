"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoProductDelete = exports.DtoProductUpdate = exports.DtoProductCreate = void 0;
const utils_1 = require("@/libs/utils");
class DtoProductCreate {
    constructor({ name, price, description }) {
        this.name = (0, utils_1.checkValue)(name, "string");
        this.price = (0, utils_1.checkValue)(price, "number");
        this.description = (0, utils_1.checkValue)(description, "string");
    }
}
exports.DtoProductCreate = DtoProductCreate;
class DtoProductUpdate {
    constructor({ name, price, description, id }) {
        this.id = (0, utils_1.checkValue)(id, "number");
        this.name = (0, utils_1.checkValue)(name, "string");
        this.price = (0, utils_1.checkValue)(price, "number");
        this.description = (0, utils_1.checkValue)(description, "string");
    }
}
exports.DtoProductUpdate = DtoProductUpdate;
class DtoProductDelete {
    constructor({ id }) {
        this.id = (0, utils_1.checkValue)(id, "number");
    }
}
exports.DtoProductDelete = DtoProductDelete;
