"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const Error_1 = require("@/libs/modules/Error");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function default_1(err, req, res, next) {
    if (err instanceof Error_1.ApiError)
        return res
            .status(err.status)
            .json({ message: err.message, status: err.status });
    return res.status(500).json({ message: "непредвиденная ошибка!" });
}
