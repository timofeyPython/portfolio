import { $ } from "../../core/dom";
import { Header } from "./header/Header";
 
 
 
export class Main {

    components;

    constructor(components: Array<any>) {
        this.components = components
    }

    getRoot() {
        const main = $.create('div', 'main')
        
        if (Array.isArray(this.components))
            this.components = this.components.map((Component)=> {
                const $el = $.create('div', Component.className)
                const component = new Component($el)
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