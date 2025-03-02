import { Page } from "./Page";
import { Header } from "@/components/myprojects/header/Header";
import { ConstuctorPage } from "@core/ConstructorPage";
import { Contents } from "@/components/myprojects/contents/Contents";
import { Emitter } from "@core/Emitter";

export class MyProjects extends Page {
  private components: ConstuctorPage;

  getRoot() {
    this.components = new ConstuctorPage({
      components: [Header, Contents],
      root: "myprojects",
      emitter: new Emitter(),
    });

    return this.components.getRoot();
  }

  afterRender() {
    this.components.init();
  }
}
