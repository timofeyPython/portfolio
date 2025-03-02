/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IEmitter,
  IInitalState,
  IQSHeaderOptions,
} from "@/types/questionnaire/interfaces";
import { DomListener } from "@core/DomListener";
import { Dom } from "@core/dom";
import { Store } from "@core/store/Store";

export class QuestionsComponent extends DomListener {
  $root: Dom;
  name: string;
  emitter: IEmitter;
  subscribe: Array<string>;
  unsubscribes: Array<any>;
  store: Store;

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.unsubscribes = [];
    this.store = options.store;
  }

  toHtml() {
    return "";
  }

  getStore() {
    return this.store.getState<IInitalState>();
  }

  // инициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDomListener();
  }
  // Удаляем компонент
  // Чистим слушателя
  destroy() {
    this.removeDomListener();
  }
  // Subscriber проверка на наличие ключа
  isWatching(key: string) {
    return this.subscribe.includes(key);
  }
  // Сюда приходят только изменение по тем полям,кот-ые мы подписались
  storeChanged(key: string) {
    console.log(
      `storeChanged: изменение Store по ключу ${key} тут может быть, какая то логика`,
    );
  }

  $emit(event: string, ...args: Array<Element> | any) {
    this.emitter.emit(event, ...args);
  }
  $on(event: string, fn: (val: any) => void) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribes.push(unsub);
  }
  $dispatch(action?: any) {
    this.store.dispatch(action);
  }
}
