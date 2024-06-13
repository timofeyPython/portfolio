import { Emitter } from "./../core/Emitter"
import { $ } from "./../core/dom" 
import { Store } from "./../core/store/Store"
import { StoreSubscriber } from "./../core/store/StoreSubscriber"

export class ConstuctorPage {

    // Нужно узнать, как описать interface
    components: Array<any>
    emitter;
    store;
    subscriber;
    root: string
 

    constructor(options: {components: Array<any>, store?: Store, root: string}) {
        this.components = options.components
        this.emitter = new Emitter()
        this.store = options.store
        this.subscriber = new StoreSubscriber(this.store) 
        this.root = options.root
    }
 

    getRoot() {
        const $root = $.create('div', this.root)
        const componentOptions = {
            emitter: this.emitter,
            store: this.store
        }

        if (Array.isArray(this.components) && this.components.length > 0) 
            
            this.components = this.components.map((Component)=> {
 
                const $el = $.create('div', Component.className)
                const component = new Component($el, componentOptions)
                console.log(component)
                $el._html(component.toHtml())
                $root._append($el)
                return component
            })

        return $root
        
    }

    init() {
        this.components.forEach((component)=> component.init())
        // this.subscriber.subscribeComponents(this.components)
    }

    destroy() {
        console.log('Типо разъебали слушателей!')
    }   
}
