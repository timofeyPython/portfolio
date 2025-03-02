"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
const connect_1 = require("./connect");
const sequelize_typescript_1 = require("sequelize-typescript");
const User = connect_1.sequelize.define("user", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    email: { type: sequelize_typescript_1.DataType.STRING, unique: true },
    password: { type: sequelize_typescript_1.DataType.STRING },
    phone: { type: sequelize_typescript_1.DataType.STRING },
    role: { type: sequelize_typescript_1.DataType.STRING, defaultValue: "USER" },
});
const Product = connect_1.sequelize.define("product", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    name: { type: sequelize_typescript_1.DataType.STRING, allowNull: false },
    price: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: false },
    images: { type: sequelize_typescript_1.DataType.JSON, allowNull: true },
    location_lighting: { type: sequelize_typescript_1.DataType.STRING, allowNull: true },
    depth_mirror: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: true },
    general_depth_production: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: true },
    width_frame: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: true },
    type_fixation: { type: sequelize_typescript_1.DataType.STRING, allowNull: true },
    number_light: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: true },
    description: { type: sequelize_typescript_1.DataType.TEXT, allowNull: false },
    width: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: true },
    height: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: true },
});
const Orders = connect_1.sequelize.define("orders", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    products: { type: sequelize_typescript_1.DataType.JSON },
    price: { type: sequelize_typescript_1.DataType.INTEGER },
    name: { type: sequelize_typescript_1.DataType.STRING },
    surname: { type: sequelize_typescript_1.DataType.STRING },
    email: { type: sequelize_typescript_1.DataType.STRING },
    phone: { type: sequelize_typescript_1.DataType.STRING },
    address: { type: sequelize_typescript_1.DataType.STRING },
    delivery: { type: sequelize_typescript_1.DataType.BOOLEAN },
    montage: { type: sequelize_typescript_1.DataType.BOOLEAN },
    data_delivery: { type: sequelize_typescript_1.DataType.DATE },
    comments: { type: sequelize_typescript_1.DataType.STRING },
    status: { type: sequelize_typescript_1.DataType.STRING },
});
const Works = connect_1.sequelize.define("works", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    img: { type: sequelize_typescript_1.DataType.STRING, allowNull: null },
    sort: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: null },
});
const Reviews = connect_1.sequelize.define("reviews", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    img: { type: sequelize_typescript_1.DataType.STRING, allowNull: null },
    sort: { type: sequelize_typescript_1.DataType.INTEGER, allowNull: null },
});
const Basket = connect_1.sequelize.define("basket", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
});
const BasketProduct = connect_1.sequelize.define("basket_product", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
});
const TypeCategories = connect_1.sequelize.define("type_categories", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    name: { type: sequelize_typescript_1.DataType.STRING, allowNull: null },
});
const TypeLighting = connect_1.sequelize.define("type_lighting", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    name: { type: sequelize_typescript_1.DataType.STRING, allowNull: null },
});
const TypeColorTemperature = connect_1.sequelize.define("type_color_temperature", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    name: { type: sequelize_typescript_1.DataType.STRING, allowNull: null },
});
const TypeMaterial = connect_1.sequelize.define("type_material", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    name: { type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: null },
});
const ColorFrame = connect_1.sequelize.define("color_frame", {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: connect_1.sequelize.literal("uuid_generate_v4()"),
    },
    name: { type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: null },
});
User.hasOne(Basket);
Basket.belongsTo(User);
Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);
TypeCategories.hasOne(Product, {
    foreignKey: { name: "typeCategoryId", allowNull: false },
});
Product.belongsTo(TypeCategories);
TypeLighting.hasOne(Product, {
    foreignKey: { name: "typeLightingId", allowNull: false },
});
Product.belongsTo(TypeLighting);
TypeColorTemperature.hasOne(Product, {
    foreignKey: { name: "typeColorTemperatureId", allowNull: false },
});
Product.belongsTo(TypeColorTemperature);
TypeMaterial.hasOne(Product, {
    foreignKey: { name: "typeMaterialId", allowNull: false },
});
Product.belongsTo(TypeMaterial);
ColorFrame.hasOne(Product, {
    foreignKey: { name: "colorFrameId", allowNull: false },
});
Product.belongsTo(ColorFrame);
Product.hasMany(BasketProduct, {
    foreignKey: { name: "basketId", allowNull: false },
});
BasketProduct.belongsTo(Product);
exports.models = {
    User,
    Basket,
    TypeLighting,
    TypeColorTemperature,
    TypeMaterial,
    TypeCategories,
    Product,
    BasketProduct,
    Orders,
    ColorFrame,
    Works,
    Reviews,
};
