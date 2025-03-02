"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoOrderCreate = void 0;
const utils_1 = require("@/libs/utils");
class DtoOrderCreate {
    constructor({ price, name, surname, email, phone, address, delivery, montage, comments, }) {
        this.price = (0, utils_1.checkValue)(price, "number");
        this.name = (0, utils_1.checkValue)(name, "string");
        this.surname = (0, utils_1.checkValue)(surname, "string");
        this.email = (0, utils_1.checkValue)(email, "string");
        this.phone = (0, utils_1.checkValue)(phone, "number");
        this.address = (0, utils_1.checkValue)(address, "string");
        this.delivery = (0, utils_1.checkValue)(delivery, "boolean");
        this.montage = (0, utils_1.checkValue)(montage, "boolean");
        this.comments = (0, utils_1.checkValue)(comments, "string");
    }
}
exports.DtoOrderCreate = DtoOrderCreate;
