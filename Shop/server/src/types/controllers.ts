/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { models } from "@/libs/database/models";

export type TDtoValue = {
  value: string;
  status: boolean;
}

type TUser = {
  id: string;
  role: string;
  email: string;
};

type TRequestExt = Request & {
  user: TUser;
};

export type IControllerContext = [TRequestExt, Response, NextFunction]
export type IControllersOptions = [TRequestExt, Response, NextFunction, IOptionsCreateType];
export type IControllersGetOptions = [TRequestExt, Response, NextFunction, IOptionsGetType];
export type IOptionsCreateType = {
  categoryTitle: string;
  model: any;
};
export type IOptionsUpdateType = IOptionsCreateType;
export type IOptionsDeleteType = IOptionsUpdateType;
export type IOptionsGetType = {
  model: any;
};

export interface IClassBasicMethod {
  getAll(...args: IControllersOptions): Promise<unknown>;
  create(...args: IControllersOptions): Promise<unknown>;
  update(...args: IControllersOptions): Promise<unknown>;
  delete(...args: IControllersOptions): Promise<unknown>;
  getOne?(...args: IControllersOptions): Promise<unknown>;
}

export interface IClassImagesConstructor {
  router: string;
  type: string;
  model: typeof models.Works;
  pathFolder: string;
}

export type TModelImages = typeof models.Works