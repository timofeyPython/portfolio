"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
/* eslint-disable @typescript-eslint/no-unused-vars */
const Error_1 = require("@/libs/modules/Error");
function default_1(role) {
    return function (...args) {
        const [req, res, next] = args;
        if (req.user.role === role)
            return next();
        return next(Error_1.ApiError.unauthorized("Нет прав для данного действия!"));
    };
}
