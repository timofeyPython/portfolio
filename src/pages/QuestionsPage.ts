import { Page } from "./Page"
import { Questions } from "../components/questions/Questions"
import { Header } from "../components/questions/header/Header"
import { Contents } from "../components/questions/contents/Content"
import { Info } from "../components/questions/info/Info"
import { Title } from "../components/questions/title/Title"
import { Store } from "../core/store/Store"
import { rootReducer } from '../redux/rootReducer'
import {normalizeInitialState} from '../redux/initialState'
import {utils} from '../core/utils/utils'

const {storage, debounce} = utils()



export class QuestionsPage extends Page {
    

    question: any
 
 

    getRoot() {

        const params = this.params ? this.params : null
        const state = storage(params)
        const initialState = normalizeInitialState(state)
        const store = new Store(rootReducer, initialState)
 
        
        const stateListener = debounce(((state: any) => storage('tested', state)), 300)
        store.subscribe(stateListener)
        
        this.question = new Questions({
            components: [
                Header,
                Title,
                Info,
                Contents
            ],
            store
        })        
        return this.question.getRoot()
    }

    afterRender(): void {
        this.question.init()
    }

    destroy(): void {
        this.question.desctroy()
    }
}

