import { EApi } from "@/types/api";
import clientApi from "./clientApi";
import type { ICreateOrder, IOption, IProduct } from "@/types/general";

async function getTypes(path: string) {
  const result = await clientApi<Array<IOption>>({
    method: "GET",
    path: path,
  });
  return result;
}

export async function getProducts(page: number, params: any) {
  const result = await clientApi<{
    entries: Array<IProduct>;
    count: number;
  }>({
    method: "GET",
    path: EApi.PRODUCTS,
    parameters: { page, ...params },
  });
  return result;
}

export async function getProduct(id: string) {
  const result = await clientApi<{
    entry: IProduct;
  }>({
    method: "GET",
    path: `${EApi.PRODUCTS}/${id}`,
  });
  return result;
}

export async function getCategories() {
  return await getTypes(EApi.CATEGORIES);
}

export async function getColortemps() {
  return await getTypes(EApi.COLORTEMPS);
}

export async function getMaterials() {
  return await getTypes(EApi.MATERIALS);
}

export async function getColorFrames() {
  return await getTypes(EApi.COLORFRAMES);
}

export async function getLight() {
  return await getTypes(EApi.LIGHT);
}

export async function getWorks() {
  const result = await clientApi<{
    result: Array<{ id: number; img: string; sort: number }>;
  }>({
    method: "GET",
    path: `${EApi.WORKS}`,
  });
  return result.result;
}

export async function getReviews() {
  const result = await clientApi<{
    result: Array<{ id: number; img: string; sort: number }>;
  }>({
    method: "GET",
    path: `${EApi.REVIEWS}`,
  });
  return result.result;
}

export async function createOrder(data: ICreateOrder) {
  const result = await clientApi<{
    message: string;
  }>({
    method: "POST",
    path: `${EApi.ORDERS}`,
    data,
  });
  return result;
}
