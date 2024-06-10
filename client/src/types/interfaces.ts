import { Store } from "../core/store/Store";

export interface HLET extends HTMLElement {}

export interface IClasses extends Page {
    params: any;
    destroy: ()=>void;
}

// Page
export  interface Page {
    getRoot: (()=>{$el: HLET});
    afterRender: any;
}

export interface IQSHeaderOptions {
    name: string;
    listeners: Array<string>;
    emitter: any
    store: Store;
    subscribe: Array<any>
}

// Routers
export interface IRoutes {
    path: string;
    template: any;
}

// Emiiter
export interface IEmitter {
    listeners: any;
    emit?: ((event: string, ...args: Array<Element>)=>boolean);
    subscribe?: ((event: string | number, fn: any)=>any);
}

export interface IInitalState {
    [tested: string]: {
        name: null | string;
        answer: [];
        startDate: Date;
        passTime: string;
        answer_count: number;
    }
}
