"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    logging: false,
});
