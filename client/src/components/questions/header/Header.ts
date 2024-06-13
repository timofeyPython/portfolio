import { $, Dom } from "../../../core/dom"
import { QuestionsComponent } from "../../questions/QuestionsComponents"
import { IQSHeaderOptions } from "../../../types/interfaces"
import iconHome from '../../../assets/icon/home.png'

export class Header extends QuestionsComponent {
    static className = 'qs_header'

    constructor($root: Dom, options: IQSHeaderOptions) {
        super($root, {
            name: 'Header',
            ...options,
            listeners: ['click']
        })
    }

    toHtml() {
        return `
            <div style="display: flex">
                <a><img src="${iconHome}" class="qs_img" id="close"></a>
                <p>Работа для портфолио: Тестирование по ЯП JavaScript, выполненная на нативном JS</p>
            </div>
            <div id='time'> Текущее время: ${(new Date()).toLocaleTimeString()}</div>
        `
    }

    init() {
        super.init()
        this.updateTime() 
        
    }


    onClick(event: any) {
        if (event.target.id === 'close') {
            this.destroy()
            window.location.replace('/')
        }
    }

    updateTime() {
        setInterval(()=>this.$root._find('#time').innerHTML = `Текущее время: ${(new Date()).toLocaleTimeString()}`
        ,1000)
    }
}
