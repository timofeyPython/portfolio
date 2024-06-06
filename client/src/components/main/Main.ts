import { $ } from "../../core/dom";
import { Emitter } from "../../core/Emitter";

 export class Main {

    components;
    emitter;

    constructor(components: Array<any>) {
        this.components = components
        this.emitter = new Emitter()
    }

    getRoot() {
        const main = $.create('div', 'main')
        const componentOptions = {
            emitter: this.emitter
        }

        if (Array.isArray(this.components))
            this.components = this.components.map((Component)=> {
                const $el = $.create('div', Component.className)
                const component = new Component($el, componentOptions)
                $el._html(component.getRoot())
                main._append($el)
                return component
            })

        return main
 
    }

    init() {
        console.log('Main', 'добавляем слушателей')
        this.components.forEach((component: any) => component.init())
    }
}