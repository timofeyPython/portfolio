import './scss/index.scss'
import { Router } from './core/routes/Router'
import { QuestionsPage } from './pages/QuestionsPage'

const pages = [
    {
        template: QuestionsPage,
        path: 'questions'
    }
]


new Router('#app', pages)
 