"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("@/controllers/User"));
const authMiddleware_1 = __importDefault(require("@/middleware/authMiddleware"));
const roleMiddleware_1 = __importDefault(require("@/middleware/roleMiddleware"));
const routes_1 = require("@/types/routes");
const express_1 = require("express");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router = new express_1.Router();
const user = new User_1.default();
router.post(`/${routes_1.ERoutesUser.reg}`, (0, roleMiddleware_1.default)("ADMIN"), user.registration.bind(user));
router.post(`/${routes_1.ERoutesUser.login}`, user.login.bind(user));
router.get(`/${routes_1.ERoutesUser.check}`, authMiddleware_1.default, user.check.bind(user));
exports.default = router;
