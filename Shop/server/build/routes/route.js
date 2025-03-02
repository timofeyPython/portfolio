"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("@types_/routes");
const user_1 = __importDefault(require("@routes/user"));
const product_1 = __importDefault(require("@routes/product"));
const types_1 = __importDefault(require("@/routes/types"));
const order_1 = __importDefault(require("@/routes/order"));
const works_1 = __importDefault(require("@/routes/works"));
const reviews_1 = __importDefault(require("@/routes/reviews"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router = new express_1.Router();
router.get("/", (req, res) => res.json({ message: "Hello, I AM REST_API_V1_0" }));
router.use(`/${routes_1.ERouters.users}`, user_1.default);
router.use(`/${routes_1.ERouters.products}`, product_1.default);
router.use(`/${routes_1.ERouters.types}`, types_1.default);
router.use(`/${routes_1.ERouters.orders}`, order_1.default);
router.use(`/${routes_1.ERouters.works}`, works_1.default);
router.use(`/${routes_1.ERouters.reviews}`, reviews_1.default);
exports.default = router;
