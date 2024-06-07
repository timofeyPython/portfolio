import { MainComponents } from '../../../core/main/mainComponents'
import { IDom, IQSHeaderOptions } from '../../../types/interfaces'
import { section } from './contents.section'
 
const { lists_content } = section ()

export class Contents extends MainComponents {

    static className = 'main_contents'
 

    constructor($root: IDom, options: IQSHeaderOptions) {
        super($root, {
            name: 'Contents',
            listeners: ['click'],
            ...options
        })
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
    }

    onClick(event: Event) {
        console.log(event.target)
        console.log(this.$root.$el)
    }

    
}