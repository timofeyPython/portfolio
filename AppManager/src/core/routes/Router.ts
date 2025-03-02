import { $ } from "@core/dom";
import type { IRoutes, IClasses } from "@/types/questionnaire/interfaces";
import { ActiveRoute } from "./ActiveRoute";

export class Router {
  private $placeholder;
  private routes;
  private page: IClasses;

  constructor(selector: string, routes: Array<IRoutes>) {
    if (!selector) {
      throw new Error("Не передан селектор для Router");
    }

    this.$placeholder = $(selector);
    this.routes = routes;
    this.page = null;
    this.changePageHandler = this.changePageHandler.bind(this);
    this.init();
  }

  private init() {
    this.changePageHandler();
  }

  private changePageHandler() {
    if (this.page) this.page.destroy();
    this.$placeholder._clear();

    const path = ActiveRoute.path;

    const activeRoute = this.routes.find((route) => route.path === path);
    const defaultPage = this.routes.find((route) => !route.path);

    if (!activeRoute && !defaultPage) throw new Error("Не передан HomePage");

    const route = activeRoute ? activeRoute : defaultPage;
    const Page = route.template;

    // Instance класса
    this.page = new Page(route.storage);
    // Добавляем контент
    this.$placeholder._append(this.page.getRoot());
    // Добавляем слушателей
    this.page.afterRender();
  }
}
