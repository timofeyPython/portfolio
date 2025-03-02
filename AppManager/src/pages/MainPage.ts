import { ConstuctorPage } from "@/core/ConstructorPage";
import { Page } from "./Page";
import { Emitter } from "@/core/Emitter";
import { useRoutes } from "@/routes/main";

export class MainPage extends Page {
  private components: ConstuctorPage;

  getRoot() {
    this.components = new ConstuctorPage({
      components: useRoutes(),
      root: "main",
      emitter: new Emitter(),
    });

    return this.components.getRoot();
  }

  afterRender() {
    this.components.init();
  }
}
