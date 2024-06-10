import { HLET } from "../types/interfaces"

export class Dom {

    $el: HLET
 
    constructor(selector: HLET | string) {
        // app
        this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
    }
    _html(html: string): {$el: HLET} | string{
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
 
        return this.$el.outerHTML.trim()
    }
    _append(node: {$el: HLET}): {$el: HLET} {
        let nodes
        if (node instanceof Dom) {
            nodes = node.$el
        }
        
        if (Element.prototype.append) {
            this.$el.append(nodes)
        } else {
            this.$el.appendChild(nodes)
        }
    
        return this
    }
    _on(eventType: string, callback: ((...arg: any)=>void)) {
        this.$el.addEventListener(eventType, callback)
    }

    _of(eventType: string, callback: (()=>void)) {
        this.$el.removeEventListener(eventType, callback)
    }

    _find(selector: string) {
        return this.$el.querySelector(selector)
    }

    _clear() {
        this._html('')
        return this
    }

    _removeStorage(key: string) {
        localStorage.removeItem(key)
    }

    get data() {
        return this.$el.dataset
    }
}

 
export function $(selector: HTMLElement | string) {
    return new Dom(selector)
}



$.create = (tagName: string, classes = '') => {

    const el = document.createElement(tagName)
    
    if (classes) {
        el.classList.add(classes)
    }

    return $(el)
}