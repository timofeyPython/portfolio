import './scss/index.scss'
import { Router } from './core/routes/Router'
import { QuestionsPage } from './pages/QuestionsPage'
import { MainPage } from './pages/MainPage'
 

const pages = [
    {
        template: QuestionsPage,
        path: 'questions'
    },
    {
        template: MainPage,
        path: 'main'
    }
]

new Router('#app', pages)
 