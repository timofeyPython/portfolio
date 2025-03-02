export interface IOption {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  locationLighting: string;
  depthMirror: number;
  generalDepthProduction: number;
  widthFrame: number;
  typeFixation: number;
  numberLight: number;
  description: string;
  images: {
    result: Array<string>;
  };
  width: number;
  height: number;
  types: {
    frame: IOption;
    category: IOption;
    lighting: IOption;
    colorTemperature: IOption;
    material: IOption;
  };
}

export interface IOrder {
  bid: number;
  id: string;
  name: string;
  price: number;
  locationLighting: string;
  depthMirror: number;
  generalDepthProduction: number;
  widthFrame: number;
  typeFixation: number;
  numberLight: number;
  width: number;
  height: number;
  types: {
    frame: IOption;
    category: IOption;
    lighting: IOption;
    colorTemperature: IOption;
    material: IOption;
    antiFogging: boolean;
  };
  changeTypes: boolean;
  images: Array<string>;
}

export interface ICreateOrder {
  products: any;
  price: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  montage: boolean;
  delivery: boolean;
  comments: string;
}
