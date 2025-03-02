"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const Images_1 = __importDefault(require("@controllers/Images"));
const express_1 = require("express");
const index_1 = require("@utils/index");
const models_1 = require("@db/models");
const routes_1 = require("@types_/routes");
const constants_1 = require("@utils/constants");
const router = new express_1.Router();
const works = new Images_1.default({
    router: routes_1.ERouters.works,
    type: "Работы",
    model: models_1.models.Works,
    pathFolder: constants_1.folderImagesWorks,
});
router.get("/", works.getAll.bind(works));
router.post("/", (0, index_1.uploadFiles)("images", "works", true), works.create.bind(works));
router.put("/", (0, index_1.uploadFiles)("images", "works"), works.update.bind(works));
router.delete("/:id", works.delete.bind(works));
exports.default = router;
