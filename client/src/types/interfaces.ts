import { Store } from "../core/store/Store";

export interface HLET extends HTMLElement {}

export interface IDom {
    $el: HLET;    
    _html?: ()=>void;
    _append?: ()=>{$el: HLET};
    _on?: ((a: string, b: ((...arg:any)=>void))=>void);
    _of?: ((a: string, b: (()=>void))=>void);
    _find?: (x: string)=>HLET;
    _clear?: ()=> this;
    readonly data?: string;
}

export interface IDomListener  extends IDom {}

export interface IComponent {
    className: string;
    $root: IDomListener;
    name: string;
}

export interface IClasses extends Page {
    params: any;
    destroy: ()=>void;
}

// Page
export  interface Page {
    getRoot: (()=>{$el: HLET});
    afterRender: any;
}
// QuestionClass
export interface IQuestions {
    components: Array<IComponent>
}
// QuestionsOptions
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
