import { IInitalState } from "../../types/interfaces";

export class Store {
    state;
    listeners: Array<any>;
    rootReducer: any;


    constructor(rootReducer: ((state: IInitalState | {}, action: {type: string})=>IInitalState), initialState = {}) {
        this.state = rootReducer({...initialState}, {type: '__init__'})
        this.listeners = [] // Массив подписок (функций)
        this.rootReducer = rootReducer
    }

    subscribe = (fn: ((state: IInitalState)=>void)) => {
        this.listeners.push(fn)
        return {
            unsubscribe() {
                this.listeners = this.listeners.filter((l: (()=>void)) => l != fn );
            }
        }
    }

    dispatch = (action?: any) => {
        this.state = this.rootReducer(this.state, action)
        this.listeners.forEach(l=>l(this.state))
    }

    getState = () => {
        return JSON.parse(JSON.stringify(this.state))
    }
}