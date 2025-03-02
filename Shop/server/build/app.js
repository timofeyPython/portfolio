"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("module-alias/register");
const App_1 = require("@modules/App");
const route_1 = __importDefault(require("@routes/route"));
const cors_1 = __importDefault(require("cors"));
const errorMiddleware_1 = __importDefault(require("@middleware/errorMiddleware"));
const logMiddleware_1 = __importDefault(require("@middleware/logMiddleware"));
const port = process.env.PORT || 5000;
const app = new App_1.App({
    port: +port,
    middleware: [
        (0, cors_1.default)({
            credentials: true,
        }),
        ["/api", route_1.default],
        logMiddleware_1.default,
        errorMiddleware_1.default,
    ],
});
app.start();
