"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const Products_1 = __importDefault(require("@controllers/Products"));
const index_1 = require("@utils/index");
const authMiddleware_1 = __importDefault(require("@middleware/authMiddleware"));
const express_1 = require("express");
const router = new express_1.Router();
const products = new Products_1.default();
router.post("/", authMiddleware_1.default, (0, index_1.uploadFiles)("images", "products", true), products.create.bind(products));
router.put("/", authMiddleware_1.default, (0, index_1.uploadFiles)("images", "products", true), products.update.bind(products));
router.delete("/", authMiddleware_1.default, products.delete.bind(products));
router.get("/", products.getAll.bind(products));
router.get("/:id", products.getOne.bind(products));
exports.default = router;
