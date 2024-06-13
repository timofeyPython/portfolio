import { Dom } from "../../../core/dom";
import { QuestionsComponent } from "../../questions/QuestionsComponents";
import { utils } from "../../../core/utils/utils";
import { IQSHeaderOptions } from "../../../types/interfaces";

const { storage } = utils()

export class Modal extends QuestionsComponent {

   static className = 'qs_modal'

    constructor($root: Dom, options:IQSHeaderOptions) {
        super($root, {
            ...options,
            listeners: ['click']
        })
    }

    toHtml(): string {
        return `
        <form>
            <div class="modal">
                <div class="modalContent">
                <label class="form-label">Для начала тестирования заполните поле ввода имени.</label>
                <hr>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Введите ваше имя :</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Иван ">
                    </div>
                    <div class="col-auto" style="text-align: center;">
                        <button type="submit" class="btn btn-primary mb-3">Сохранить</button>
                    </div>
                </div>
            </div>
        </form>
        `
    }

    init() {
        super.init()
    }
 
    onClick(event: any) {
        if (event.target.type === 'submit') {
            const inputValue = this.$root.$el.querySelector('input').value
            if (inputValue.length <= 3) {
                alert('Введите корректное имя')
            } else {
                const state = this.store.getState()
                state.tested.name = inputValue
                storage('tested', state)
            }
        }
            
    
    }
}