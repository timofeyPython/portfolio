import { HLET, IEmitter, IQSHeaderOptions } from "../../types/interfaces";
import { DomListener } from "../DomListener";
import { Dom } from "../dom";
import { Store } from "../store/Store";

export class QuestionsComponent extends DomListener {

    $root: Dom;
    name: string;
    emitter: IEmitter
    subscribe: Array<any>;
    unsubscribes: Array<any>;
    store: Store;

    constructor($root: Dom, options: IQSHeaderOptions) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.subscribe = options.subscribe
        this.unsubscribes = []
        this.store  = options.store
    }

    toHtml() {
        return ''
    }

    // инициализируем компонент
    // Добавляем DOM слушателей
    init() {
        // console.log(`init - component <${this.name}>`)
        this.initDomListener()
    }
    // Удаляем компонент
    // Чистим слушателя
    destroy() {
        this.removeDomListener()
    }
    // Subscriber проверка на наличие ключа
    isWatching(key: string) {
        return this.subscribe.includes(key)
    }
    // Сюда приходят только изменение по тем полям,кот-ые мы подписались
    storeChanged() {
        console.log('storeChanged')
    }

    $emit(event: string, ...args: Array<Element> | any) {
        this.emitter.emit(event, ...args)
    }
    $on(event: string, fn: ((val:any)=>void)) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribes.push(unsub)
    }
    $dispatch(action?: any) {
        this.store.dispatch(action)
    }  
}