import {
  IProduct,
  IUser,
  IImages,
  IOrders,
  ITypes,
  IBasket,
  IBasketProduct,
} from "@/types/models";
import { sequelize } from "./connect";
import { DataType } from "sequelize-typescript";

const User = sequelize.define<IUser>("user", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  email: { type: DataType.STRING, unique: true },
  password: { type: DataType.STRING },
  phone: { type: DataType.STRING },
  role: { type: DataType.STRING, defaultValue: "USER" },
});

const Product = sequelize.define<IProduct>("product", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  name: { type: DataType.STRING, allowNull: false },
  price: { type: DataType.INTEGER, allowNull: false },
  images: { type: DataType.JSON, allowNull: true },
  location_lighting: { type: DataType.STRING, allowNull: true },
  depth_mirror: { type: DataType.INTEGER, allowNull: true },
  general_depth_production: { type: DataType.INTEGER, allowNull: true },
  width_frame: { type: DataType.INTEGER, allowNull: true },
  type_fixation: { type: DataType.STRING, allowNull: true },
  number_light: { type: DataType.INTEGER, allowNull: true },
  description: { type: DataType.TEXT, allowNull: false },
  width: { type: DataType.INTEGER, allowNull: true },
  height: { type: DataType.INTEGER, allowNull: true },
});

const Orders = sequelize.define<IOrders>("orders", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  products: { type: DataType.JSON },
  price: { type: DataType.INTEGER },
  name: { type: DataType.STRING },
  surname: { type: DataType.STRING },
  email: { type: DataType.STRING },
  phone: { type: DataType.STRING },
  address: { type: DataType.STRING },
  delivery: { type: DataType.BOOLEAN },
  montage: { type: DataType.BOOLEAN },
  data_delivery: { type: DataType.DATE },
  comments: { type: DataType.STRING },
  status: { type: DataType.STRING },
});

const Works = sequelize.define<IImages>("works", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  img: { type: DataType.STRING, allowNull: null },
  sort: { type: DataType.INTEGER, allowNull: null },
});

const Reviews = sequelize.define<IImages>("reviews", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  img: { type: DataType.STRING, allowNull: null },
  sort: { type: DataType.INTEGER, allowNull: null },
});

const Basket = sequelize.define<IBasket>("basket", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
});

const BasketProduct = sequelize.define<IBasketProduct>("basket_product", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
});

const TypeCategories = sequelize.define<ITypes>("type_categories", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  name: { type: DataType.STRING, allowNull: null },
});

const TypeLighting = sequelize.define<ITypes>("type_lighting", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  name: { type: DataType.STRING, allowNull: null },
});

const TypeColorTemperature = sequelize.define<ITypes>(
  "type_color_temperature",
  {
    id: {
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: sequelize.literal("uuid_generate_v4()"),
    },
    name: { type: DataType.STRING, allowNull: null },
  }
);

const TypeMaterial = sequelize.define<ITypes>("type_material", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  name: { type: DataType.STRING, unique: false, allowNull: null },
});

const ColorFrame = sequelize.define<ITypes>("color_frame", {
  id: {
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: sequelize.literal("uuid_generate_v4()"),
  },
  name: { type: DataType.STRING, unique: false, allowNull: null },
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

export const models = {
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
