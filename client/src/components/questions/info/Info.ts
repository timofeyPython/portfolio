 
import { Dom } from "../../../core/dom";
import { QuestionsComponent } from "../../questions/QuestionsComponents"
import { IQSHeaderOptions } from "../../../types/interfaces"

export class Info extends QuestionsComponent {
    static className = 'qs_info'

    $root;
    startDate: Date;

    constructor($root: Dom, options: IQSHeaderOptions) {
    

        super($root, {
            name: 'Info',
            ...options
        })

        this.$root = $root
        this.start = new Date(options.store.getState().tested.startDate)
    }

    toHtml() {
        return `
            <div class="info" id="info">
                <div>Тестирование начал: <strong id="login"></strong></div>
                <div>Время начала ${this.start.toLocaleDateString()} ${this.start.toLocaleTimeString()}</div>
                <div id="time">Прошло времени: </div>
                <div id="counter"></span>
                </div>
            </div> 
        `
    }

    init() {
        super.init()

        this.$on('info : updateTime', ((time: string)=> this.updateTime(time)))
        this.$on('info : updateCounter',(content=> this.updateCounter(content)))
        this.$on('info : visibleInfo', ((status)=>this.hidden(status)))
        this.$on('info : finish', ((fn)=> fn(this)))
        this.$on('info : login', ((fn)=> fn(this)))
        
    }

    updateCounter(content: string) {
        const $el = this.$root.$el.querySelector('#counter')
        $el.textContent = content
    }

    hidden(status: boolean) {
        if (status) {
            this.$root.$el.classList.add('hide')
        } else {
            this.$root.$el.classList.remove('hide') 
        }
    }

    updateTime(time: string) {
        const content  = time
        this.$root._find('#time').innerHTML = content
    }

    onClick() {
        console.log('test')
    }

 
}
