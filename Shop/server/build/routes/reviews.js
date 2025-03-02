"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const Images_1 = __importDefault(require("@/controllers/Images"));
const express_1 = require("express");
const utils_1 = require("@/libs/utils");
const models_1 = require("@/libs/database/models");
const routes_1 = require("@/types/routes");
const constants_1 = require("@/libs/utils/constants");
const roleMiddleware_1 = __importDefault(require("@middleware/roleMiddleware"));
const router = new express_1.Router();
const works = new Images_1.default({
    router: routes_1.ERouters.reviews,
    type: "Отзывы",
    model: models_1.models.Reviews,
    pathFolder: constants_1.folderImageReviews,
});
router.get("/", works.getAll.bind(works));
router.post("/", (0, roleMiddleware_1.default)("ADMIN"), (0, utils_1.uploadFiles)("images", "reviews", true), works.create.bind(works));
router.put("/", (0, utils_1.uploadFiles)("images", "reviews"), works.update.bind(works));
router.delete("/:id", works.delete.bind(works));
exports.default = router;
