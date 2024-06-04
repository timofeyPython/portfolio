import { HLET, IDomListener, IEmitter, IQSHeaderOptions, IStore } from "../../types/interfaces";
import { DomListener } from "../DomListener";

export class QuestionsComponent extends DomListener {

    $root: IDomListener;
    name: string;
    emitter: IEmitter
    subscribe: Array<any>;
    unsubscribes: Array<any>;
    store: IStore;

    constructor($root: IDomListener, options: IQSHeaderOptions) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.subscribe = []
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