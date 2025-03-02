/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DomListener } from "@/core/DomListener";
import { Dom } from "@core/dom";
import { IEmitter, IQSHeaderOptions } from "@/types/questionnaire/interfaces";
import { Store } from "@core/store/Store";
import { IInitalStateExcel } from "@/types/excel/interfaces";

export class ExcelComponent extends DomListener {
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
    this.store = options.store;
    this.unsubscribes = [];
  }

  // возращает шаблон компонента
  toHtml() {
    return "";
  }

  getStore() {
    return this.store.getState<IInitalStateExcel>();
  }

  // Уведомляем слушателей про события event
  $emit(event: string, ...args: Array<Element> | any) {
    this.emitter.emit(event, ...args);
  }
  // подписываемся на событие event
  $on(event: string, fn: (val: any) => void) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribes.push(unsub);
  }

  $dispatch(action?: any) {
    this.store.dispatch(action);
  }
  // Сюда приходят только изменение по тем полям,кот-ые мы подписались
  storeChanged(args: any) {
    // console.log("store", args);
  }
  isWatching(key: string) {
    return this.subscribe.includes(key);
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
    this.unsubscribes.forEach((unsub) => unsub());
  }
}
