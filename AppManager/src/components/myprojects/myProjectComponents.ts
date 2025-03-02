import { IQSHeaderOptions } from "../../types/questionnaire/interfaces";
import { DomListener } from "../../core/DomListener";
import { Dom } from "../../core/dom";

export class MyProjectComponents extends DomListener {
  emitter;

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, options.listeners);
    this.emitter = options.emitter;
    this.name = options.name;
  }

  init() {
    this.initDomListener();
  }
  // Subscriber проверка на наличие ключа
  isWatching(key: string) {
    return this.subscribe.includes(key);
  }
  // Сюда приходят только изменение по тем полям,кот-ые мы подписались
  storeChanged() {
    console.log("storeChanged");
  }
}
