/* eslint-disable @typescript-eslint/no-explicit-any */
import { Emitter } from "@core/Emitter";
import { $ } from "@core/dom";
import { Store } from "@core/store/Store";
import { StoreSubscriber } from "@core/store/StoreSubscriber";

export class ConstuctorPage {
  components;
  emitter;
  store;
  subscriber;
  root: string;
  params: string;

  constructor(options: {
    components: Array<any>;
    store?: Store;
    root: string;
    emitter: Emitter;
  }) {
    this.components = options.components;
    this.emitter = options.emitter;
    this.store = options.store;
    this.subscriber = new StoreSubscriber(this.store);
    this.root = options.root;
  }

  getRoot() {
    const $root = $.create("div", this.root);
    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
      root: this.root,
    };

    if (Array.isArray(this.components) && this.components.length > 0)
      this.components = this.components.map((Component) => {
        const $el = $.create("div", Component.className);
        const component = new Component($el, componentOptions);
        $el._html(component.toHtml());
        $root._append($el);
        return component;
      });
    return $root;
  }

  init() {
    this.subscriber.subscribeComponents(this.components);
    this.components.forEach((component) => component.init());
  }

  destroy() {
    this.subscriber.unsubscribeFromStore();
  }
}
