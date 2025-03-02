import type { IOrder } from "@/types/general";
import { _localStorage } from "@/utils/halpers";
import { defineStore } from "pinia";

export default defineStore("store", {
  state: () => {
    return {
      isAuth: false,
      dVesrion: false,
      page: 1,
      countsPage: 1,
      categoriesIds: new Set(""),
      lightIds: new Set(""),
      colorTempIds: new Set(""),
      materialIds: new Set(""),
      basket: _localStorage("basket") as Array<IOrder>,
      priceRange: [0, 70000],
    };
  },
  getters: {
    getPrice(state) {
      return state.priceRange;
    },
    getSelectCategoriesIds(state) {
      return [...state.categoriesIds];
    },
    getSelectLightIds(state) {
      return [...state.lightIds];
    },
    getSelectColorTempIds(state) {
      return [...state.colorTempIds];
    },
    getSelectMaterialIds(state) {
      return [...state.materialIds];
    },
    getBasketCount(state) {
      return state.basket.length;
    },
    getBasketSum(state) {
      return state.basket.reduce((acc, item) => acc + item.price, 0);
    },
  },
  actions: {
    setPage(value: number) {
      this.page = value;
    },
    setCountsPage(value: number) {
      this.countsPage = value;
    },
    setDVerison(value: boolean) {
      this.dVesrion = value;
    },
    setLightIds(value: string, check: boolean) {
      if (check) this.lightIds.add(value);
      else this.lightIds.delete(value);
    },
    setColorTempsIds(value: string, check: boolean) {
      if (check) this.colorTempIds.add(value);
      else this.colorTempIds.delete(value);
    },
    setMaterialsIds(value: string, check: boolean) {
      if (check) this.materialIds.add(value);
      else this.materialIds.delete(value);
    },
    setCategoriesIds(value: string, check: boolean) {
      if (check) this.categoriesIds.add(value);
      else this.categoriesIds.delete(value);
    },
    addBasket(order: IOrder) {
      _localStorage("basket", order);
      this.basket.push(order);
    },
    clearBasket() {
      localStorage.setItem("basket", "[]");
      this.basket = [];
    },
    deleteProductBasket(order: IOrder) {
      const basket = this.basket.filter((entry) => entry.bid != order.bid);
      _localStorage("basket", basket, true);
      this.basket = basket;
    },
  },
});
