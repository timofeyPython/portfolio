"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
    static badRequest(message) {
        return new ApiError(404, message);
    }
    static internal(message) {
        return new ApiError(500, message);
    }
    static forbidden(message) {
        return new ApiError(403, message);
    }
    static unauthorized(message) {
        return new ApiError(401, message);
    }
}
exports.ApiError = ApiError;
