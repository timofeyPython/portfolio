import { Page } from "./Page"
import { ConstuctorPage } from "../core/ConstructorPage"
import { Header } from "../components/questions/header/Header"
import { Contents } from "../components/questions/contents/Content"
import { Info } from "../components/questions/info/Info"
import { Title } from "../components/questions/title/Title"
import { Store } from "../core/store/Store"
import { rootReducer } from '../redux/rootReducer'
import { normalizeInitialState } from '../redux/initialState'
import {utils} from '../core/utils/utils'
import { Modal } from "../components/questions/modal/Modal"
 
 

const {storage, debounce} = utils()


export class QuestionsPage extends Page {
    
    components: ConstuctorPage

    getRoot() {

        const params = this.params ? this.params : null
        const state = storage(params)
        const initialState = normalizeInitialState(state)
        const store = new Store(rootReducer, initialState)
 
        const stateListener = debounce(((state: any) => storage('tested', state)), 300)
        store.subscribe(stateListener)
        
        if (!state) 
            this.components = new ConstuctorPage({
                components: [Modal],
                store,
                root: 'questions'
            })        
        else 
            this.components = new ConstuctorPage({
                components: [
                    Header,
                    Title,
                    Info,
                    Contents
                ],
                store,
                root: 'questions'
            })    
 
        return this.components.getRoot()
    }

    afterRender() {
        this.components.init()
    }

    destroy() {
        this.components.destroy()
    }
}

