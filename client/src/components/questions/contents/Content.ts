import { QuestionsComponent } from "../../../core/questions/QuestionsComponents"
import { IQSHeaderOptions, IDom } from "../../../types/interfaces"
import { createSection, createAnswer } from "./contents.section"
import * as actions from '../../../redux/action'
import { $ } from "../../../core/dom"

export class Contents extends QuestionsComponent {
    static className = 'qs_contents'

    constructor($root: IDom, options: IQSHeaderOptions) {
        super($root, {
            name: 'Contents',
            ...options,
            listeners: ['click']
        })
    }
    
    toHtml() {
        return `
            ${createSection(this.store.getState())}
        `
    }

    init() {
        super.init()
        // Передаём инфу обо всех вопросах в components Info
        this.$emit('info : counterAll', this.$root.$el.children.length)
        this.$on('question : done', (async (section)=> await this.finishQuestion(section)))
        
    }

    async finishQuestion($section: Element) {
         
        const $btn = $section.querySelector('button')
        $section.querySelector('textarea').disabled = true
        $btn.outerHTML = createAnswer({$section})
    }

    onClick(event: any) {
 
         if (event.target.dataset.button) {
            const $target = $(event.target)
            const section: any = this.$root.$el.children[Number($target.data.button)]
            
            this.$emit('question : done', section)
            this.$emit('info : counterAdd')
            this.$emit('title : stopTime')

            this.$dispatch(actions.updateAnswer({
                id: section.dataset.cnts,
                solution: section.querySelector('textarea').value,
                date: new Date()
            }))
         }
    }
 
}


