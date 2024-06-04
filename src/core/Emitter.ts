export class Emitter {
    listeners: any
    constructor() {
        this.listeners = {}
    }

    emit(event: string, ...args: Array<any>) {
 
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach((listener: ((...args: any)=>void)) => {
            listener(...args)
        })
        return true
    } 


    subscribe(event: string | number, fn: any) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] =
                this.listeners[event].filter((listener: any) => listener !== fn)
        }
    }

}


const emitter = new Emitter()

 