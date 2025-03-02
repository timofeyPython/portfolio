"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderImageReviews = exports.folderImagesWorks = exports.folderImagesProducts = exports.folderPublicImages = void 0;
const path_1 = __importDefault(require("path"));
exports.folderPublicImages = path_1.default.resolve(process.cwd(), "public", "images");
exports.folderImagesProducts = path_1.default.resolve(process.cwd(), "public", "images", "products");
exports.folderImagesWorks = path_1.default.resolve(process.cwd(), "public", "images", "works");
exports.folderImageReviews = path_1.default.resolve(process.cwd(), "public", "images", "reviews");
