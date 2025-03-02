"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Orders_1 = __importDefault(require("@/controllers/Orders"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router = new express_1.Router;
const orders = new Orders_1.default();
router.post("/", orders.create.bind(orders));
exports.default = router;
