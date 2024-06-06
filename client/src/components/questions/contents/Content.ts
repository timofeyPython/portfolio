import { QuestionsComponent } from "../../../core/questions/QuestionsComponents"
import { IQSHeaderOptions, IDom } from "../../../types/interfaces"
import { createSection, createAnswer } from "./contents.section"
import * as actions from '../../../redux/action'

export class Contents extends QuestionsComponent {
    static className = 'qs_contents'

    constructor($root: IDom, options: IQSHeaderOptions) {
        super($root, {
            name: 'Contents',
            ...options
        })
    }
    
    toHtml() {
        return `
            ${createSection(this.store.getState())}
        `
    }

    init() {
        super.init()
        this.answerListeners()
        this.$on('question : done', (async (section)=> await this.finishQuestion(section)))
        
    }

 
    
    answerListeners() {
        const sections = this.$root.$el.children
        
        // Передаём инфу обо всех вопросах в components Info
        this.$emit('info : counterAll', sections.length)

        for (const [key, value] of Object.entries(sections)) {
            const btn = value.querySelector(`[data-answer="btn_ans_${key}"]`)
            const section: any = sections[Number(key)] 
            
            if (btn)
                btn.addEventListener('click', (()=> { 
    
                    this.$emit('question : done', section)
                    this.$emit('info : counterAdd')
                    this.$emit('title : stopTime')
                    this.$dispatch(actions.updateAnswer({
                        id: section.dataset.cnts,
                        solution: section.querySelector('textarea').value,
                        date: new Date()
                    }))
                }))
            
        }
       
 
    }

    async finishQuestion($section: Element) {
         
        const $btn = $section.querySelector('button')
        $section.querySelector('textarea').disabled = true
        $btn.outerHTML = createAnswer({$section})
   
        // emit на завершение

    }
 
}


