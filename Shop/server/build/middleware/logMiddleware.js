"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const Error_1 = require("@/libs/modules/Error");
const Log_1 = require("@/libs/modules/Log");
function default_1(err, req, res, next) {
    if (err instanceof Error_1.ApiError)
        Log_1.Log.write({
            message: err === null || err === void 0 ? void 0 : err.message,
            router: req.url,
            method: req.method
        }, false);
    return next(err);
}
