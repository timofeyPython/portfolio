import { $ } from "../../core/dom";
 
 
 
export class Main {

    components: Array<any>;

    constructor(components: Array<any>) {
        this.components = components
    }

    getRoot() {
        const main = $.create('div', 'main')

        this.components.forEach((Component:any)=> {
            const component = new Component()
            console.log(component)
            main._append(component.getRoot())
        })

        return main
 
    }

    init() {
        console.log('Main', 'добавляем слушателей')
    }
}