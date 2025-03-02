"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoUserRegistration = exports.DtoUserLogin = void 0;
const utils_1 = require("@/libs/utils");
class DtoUserLogin {
    constructor({ email, password }) {
        this.email = (0, utils_1.checkValue)(email, "string");
        this.password = (0, utils_1.checkValue)(password, "string");
    }
}
exports.DtoUserLogin = DtoUserLogin;
class DtoUserRegistration {
    constructor({ email, password, role }) {
        this.email = (0, utils_1.checkValue)(email, "string");
        this.password = (0, utils_1.checkValue)(password, "string");
        this.role = (0, utils_1.checkValue)(role, "string");
    }
}
exports.DtoUserRegistration = DtoUserRegistration;
