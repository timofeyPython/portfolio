"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoDeleteType = exports.DtoUpdateType = exports.DtoCreateType = void 0;
const utils_1 = require("@/libs/utils");
class DtoCreateType {
    constructor({ name }) {
        this.name = (0, utils_1.checkValue)(name, "string");
    }
}
exports.DtoCreateType = DtoCreateType;
class DtoUpdateType {
    constructor({ name, id }) {
        this.name = (0, utils_1.checkValue)(name, "string");
        this.id = (0, utils_1.checkValue)(id, "number");
    }
}
exports.DtoUpdateType = DtoUpdateType;
class DtoDeleteType {
    constructor({ id }) {
        this.id = (0, utils_1.checkValue)(id, "number");
    }
}
exports.DtoDeleteType = DtoDeleteType;
