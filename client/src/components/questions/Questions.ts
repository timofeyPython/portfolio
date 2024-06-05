import { Emitter } from "../../core/Emitter"
import { $ } from "../../core/dom" 
import { IEmitter, IStore } from "../../types/interfaces"

export class Questions {

    // Нужно узнать, как описать interface
    components: Array<any>
    emitter: Emitter
    store: IStore;

    constructor(options: {components: Array<any>, store: IStore}) {
        this.components = options.components
        this.emitter = new Emitter()
        this.store = options.store
    }

    getRoot() {
        const $root = $.create('div', 'questions')
        const componentOptions = {
            emitter: this.emitter,
            store: this.store
        }

        if (Array.isArray(this.components) && this.components.length > 0) 
            
            this.components = this.components.map((Component)=> {
 
                const $el = $.create('div', Component.className)
                const component = new Component($el, componentOptions)
                $el._html(component.toHtml())
                $root._append($el)
                return component
            })

        return $root
        
    }

    init() {
        this.components.forEach((component)=> component.init())
    }

    destroy() {
        console.log('Типо разъебали слушателей!')
    }   
}

 
 