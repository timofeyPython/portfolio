import { $, Dom } from "../../../core/dom"
import { QuestionsComponent } from "../../../core/questions/QuestionsComponents"
import { IQSHeaderOptions } from "../../../types/interfaces"
import iconHome from '../../../assets/icon/home.png'

export class Header extends QuestionsComponent {
    static className = 'qs_header'

    constructor($root: Dom, options: IQSHeaderOptions) {
        super($root, {
            name: 'Header',
            ...options
        })
    }

    toHtml() {
        return `
            <div style="display: flex">
                <a href="/"><img src="${iconHome}" class="qs_img"></a>
                <p>Работа для портфолио: Тестирование по ЯП JavaScript, выполненная на нативном JS</p>
            </div>
            <div id='time'> Текущее время: ${(new Date()).toLocaleTimeString()}</div>
        `
    }

    init() {
        super.init()
        this.updateTime() 
        
}


    updateTime() {
        setInterval(()=>this.$root._find('#time').innerHTML = `Текущее время: ${(new Date()).toLocaleTimeString()}`
        ,1000)
    }
}
