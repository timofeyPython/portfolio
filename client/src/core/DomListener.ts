import { HLET } from "../types/interfaces";
import { utils } from "./utils/utils"
import { IDomListener } from '../types/interfaces'
const { getMethodName } = utils()


export class DomListener {
    [method: string]: any;

    $root: IDomListener;
    listeners: Array<string> | [];

    constructor($root: {$el: HLET}, listeners: Array<string>) {
        if (!$root)  throw new Error('Не представлен $root для DomListener !')
        this.$root = $root
        this.listeners = listeners || []
    }
  
    initDomListener() {
        
        this.listeners.forEach((listener)=> {
            const method = getMethodName(listener)
            if (!this[method]) {
                const name = this.name || ''
                throw new Error(
                    `Метода ${method} нет в  ${name} компонете`)
            }

            this[method] = this[method].bind(this)
            this.$root._on(listener, this[method])
        })
    }

    
    removeDomListener() {
 
        this.listeners.forEach((listener)=> {
            const method = getMethodName(listener)
            this.$root._of(listener, this[method])
        })
    }
}