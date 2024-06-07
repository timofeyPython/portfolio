import { QuestionsComponent } from "../../../core/questions/QuestionsComponents";
import { IDom, IQSHeaderOptions } from "../../../types/interfaces";

export class Modal extends QuestionsComponent {

   static className = 'qs_modal'

    constructor($root: IDom, options:IQSHeaderOptions) {
        super($root, {
            ...options,
            listeners: ['click']
        })
    }

    toHtml(): string {
        return `
         <div class="modal">
            <div class="modalContent">
               <label class="form-label">Для начала тестирования заполните поле ввода имени.</label>
               <hr>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Введите ваше имя :</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Иван ">
                </div>
                <div class="col-auto" style="text-align: center;">
                    <button type="submit" class="btn btn-primary mb-3">Сохранить</button>
                </div>
            </div>
        </div>
        `
    }
 
    onClick(event: Event) {
        console.log('click', event.target)
    }
}