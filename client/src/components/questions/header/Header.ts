import { $ } from "../../../core/dom"
import { QuestionsComponent } from "../../../core/questions/QuestionsComponents"
import { IDom, IQSHeaderOptions } from "../../../types/interfaces"

export class Header extends QuestionsComponent {
    static className = 'qs_header'

    constructor($root: IDom, options: IQSHeaderOptions) {
        super($root, {
            name: 'Header',
            ...options
        })
    }

    toHtml() {
        return `
            <div><p>Работа для портфолио: Тестирование по ЯП JavaScript, выполненная на нативном JS</p></div>
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
