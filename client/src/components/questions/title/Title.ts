import { $, Dom } from "../../../core/dom"
import { QuestionsComponent } from "../../questions/QuestionsComponents"
import { IQSHeaderOptions, HLET } from "../../../types/interfaces"
import { observer } from './title.observer'
import * as actions from '../../../redux/action'

export class Title extends QuestionsComponent {
    static className = 'qs_title'
 
    start: Date;
    options: IQSHeaderOptions;
    interval: NodeJS.Timeout;
    counter: number;
    counterAll: number;
    name: string;
    $root;

    constructor($root: Dom, options: IQSHeaderOptions) {
        super($root, {
            name: 'Title',
            ...options,
            listeners: ['click']
        })
        
        const store = options.store.getState().tested
        this.start = new Date(store.startDate)
        this.counter = +store.answer_count
        this.counterAll = 0
        this.name = store.name
        this.$root = $root
 
    }

    toHtml() {
        return `
            <form>
                <div id="title"> 
                    <div><p>Вопросы по JS для общего ознакомления</p></div>
                    <div>Тестирование начал: ${this.name}</div>
                    <div> Время начала прохождения тестирования: ${this.start.toLocaleDateString()} ${this.start.toLocaleTimeString()}</div>
                    <div id="time">Прошло времени:</div>
                    <div id="counter">Вы ответили на <span data-counter="counter_1">${this.counter}</span> вопросов из <span data-counter="counter_2">${this.counterAll}</span>
                    </div>
                    <div style="displa:flex; justify-content: space-between;">
                        <button type="submit" class="btn btn-warning" id="repeat">Начать заного</button>
                        <button type="button" class="btn btn-info" id="rewind">Перемешать вопросы</button>
                    </div>
                </div>
            </form>
        `
    }

    init() {
        super.init()
        this.updateTime() 
        observer(this.$root.$el, this)
        this.$on('info : counterAdd', (()=>this.addCounter(this.$root.$el)))
        this.$on('info : counterAll', ((val)=> this.allCounter(this.$root.$el, val)))
        this.$on('title: stopTime', this.stopTime.bind(this))
        
    }
    updateTime() {
        const interval = setInterval(() => {
            const ss =  Math.floor( (((new Date()).getTime() - (this.start).getTime()) / 1000 ) % 60 )
            const mm = Math.floor( ( ((new Date()).getTime() - (this.start).getTime()) / (1000*60)) % 60 )
            const hh = Math.floor( (((new Date()).getTime() - (this.start).getTime()) / (1000*60*60) ) % 60 )
            const content  = `Прошло времени: ${hh ? `${hh} часов` : ''} ${mm ? `${mm} минут ` : ''}  ${ss} секунд.`
            this.$root._find('#time').innerHTML = content

            this.$emit('info : updateTime', content)
            this.$dispatch(actions.updateTime(content)) 
        }
        ,1000)

        this.interval = interval
    }
    stopTime() {
        if (this.counter === this.counterAll)
            setTimeout(()=>clearTimeout(this.interval), 1000)
    }
    addCounter($el: HLET) {
 
        const counter = $el.querySelector('[data-counter="counter_1"]')
        this.counter++
        counter.innerHTML = `${this.counter}`
        let contentEmit = `Вы ответили на ${this.counter} вопросов из ${this.counterAll}`

        if (this.counter >= this.counterAll) {
       
            this.finishTest($el) 
        } 

        this.$emit('info : updateCounter', contentEmit)
        this.$dispatch(actions.updateCounter(this.counter))
    }
    allCounter($el: HLET, val:string) {
        const counter = $el.querySelector('[data-counter="counter_2"]')
        this.counterAll = +val
        counter.innerHTML = `${this.counterAll}`
        this.counter === this.counterAll ? this.finishTest($el) : ''
        this.$emit('info : updateCounter', `Вы ответили на ${this.counter} вопросов из ${this.counterAll}`)
        this.$emit('info : login', ((context: any)=> context.$root.$el.querySelector('#login').textContent = this.name))
    }
    finishTest($el: HLET) {
        const finish = $.create('div')
        finish.$el.textContent = 'Поздравляем вы завершили тест !!!'
        $el.classList.add('finish')
        $el.appendChild(finish.$el)

        this.stopTime()

        this.$emit('info : finish', ((context: any)=> {
            const div = context.$root.$el.querySelector('#info')
            div.classList.add('finish')
            div.appendChild(finish.$el)
        }))
    }
    onClick(event: any) {
        const id = event.target.id
 
        if (id === 'repeat') this.$root._removeStorage('tested')
        if (id === 'rewind') this.$emit('questions : rewind')
    }
}
