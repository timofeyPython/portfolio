import type { TTested } from "./type";

export interface HLET extends HTMLElement {}

export interface IDom {
    $el: HLET;    
    _html?: ()=>void;
    _append?: ()=>{$el: HLET};
    _on?: ((a: string, b: ((...arg:any)=>void))=>void);
    _of?: ((a: string, b: (()=>void))=>void);
    _find?: (x: string)=>HLET;
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
    store: IStore;
}

// Routers
export interface IRoutes {
    path: string;
    template: any;
}

// Store
export interface IStore {
    subscribe: ((fn: any)=>{
        unsubscribe(): void;
    });
    dispatch: (action: any) => void;
    getState: () => {
        tested: TTested
    }
}

// Emiiter
export interface IEmitter {
    listeners: any;
    emit?: ((event: string, ...args: Array<Element>)=>boolean);
    subscribe?: ((event: string | number, fn: any)=>any);
}



 