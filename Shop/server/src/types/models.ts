import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface IUser
  extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id: number;
  email: string;
  password: string;
  phone: string;
  role: string;
}

export interface IProduct
  extends Model<InferAttributes<IProduct>, InferCreationAttributes<IProduct>> {
  id: number;
  name: string;
  price: number;
  images: {
    result: Array<string>;
  };
  location_lighting: string;
  depth_mirror: number;
  general_depth_production: number;
  width_frame: number;
  type_fixation: string;
  number_light: number;
  description: number;
  width: number;
  height: number;
  typeCategoryId?: number;
  typeLightingId?: number;
  typeColorTemperatureId?: number;
  typeMaterialId?: number;
  colorFrameId?: number;
  color_frame?: ITypes;
  type_category?: ITypes;
  type_lighting?: ITypes;
  type_color_temperature?: ITypes;
  type_material?: ITypes;
}

export interface IImages
  extends Model<InferAttributes<IImages>, InferCreationAttributes<IImages>> {
  id: number;
  img: string;
  sort: number;
}

export interface IOrders
  extends Model<InferAttributes<IOrders>, InferCreationAttributes<IOrders>> {
  id: number;
  products: string;
  price: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  delivery: boolean;
  montage: boolean;
  data_delivery: string;
  comments: string;
  status: string;
}

export interface ITypes
  extends Model<InferAttributes<ITypes>, InferCreationAttributes<ITypes>> {
  id: string;
  name: string;
}

export interface IBasket
  extends Model<InferAttributes<IBasket>, InferCreationAttributes<IBasket>> {
  id: string;
  userId?: IUser;
}

export interface IBasketProduct
  extends Model<InferAttributes<IBasketProduct>, InferCreationAttributes<IBasketProduct>> {
  id: string;
  basketId?: IBasket;
  productId?: IProduct;
}
