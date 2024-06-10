import { $, Dom } from '../../../core/dom'
import { MainComponents } from '../../../core/main/mainComponents'
import { IQSHeaderOptions } from '../../../types/interfaces'
import { section } from './contents.section'
 
const { lists_content, listsJob, showBlock } = section()

export class Contents extends MainComponents {

    static className = 'main_contents'
    modal;

    constructor($root: Dom, options: IQSHeaderOptions) {
        super($root, {
            name: 'Contents',
            ...options
        })
        this.modal = false
    }

    getRoot() {
         
        return `
            <div class="contents">
                <h2 style="margin-top: 25px; text-align: center;">
                    Вам представлен список моих работ в разных направлениях
                </h2>
                <div class="lists">
                    ${lists_content()}
                </div>
            </div>
        
        `
    }

    init() {
        super.init()
        this.blocksListeners()
    }

    blocksListeners() {
        const blocks = this.$root.$el.getElementsByClassName('block')
        for (const [key, value] of Object.entries(blocks)) {
            const htmlElement: any = value
            const div = $(htmlElement)
            div._on('click', (()=> this.showModal(listsJob[+key])))
        }
    }

    showModal(object: {title: string, description: string, img: any}) {
        const modal = $.create('div', 'main_modal')
        modal._html(showBlock(object))
        const elementClose: any = modal.$el.querySelector('#close')
        const close = $(elementClose)
        close._on('click', ()=> console.log('close', modal.$el.remove()))
        this.$root._append(modal)
    }



    
}