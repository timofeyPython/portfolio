import { Dom } from "@core/dom";
import { utils } from "@core/utils/utils";
import { QuestionsComponent } from "@components/questionnaire/QuestionsComponents";
import { IQSHeaderOptions } from "@types_/questionnaire/interfaces";

const { storage } = utils();

export class Modal extends QuestionsComponent {
  static className = "qs_modal";
  private storage;

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      ...options,
      listeners: ["click"],
    });
    this.storage = options.root;
  }

  toHtml(): string {
    return `
      <form>
          <div class="modal">
              <div class="modalContent">
              <h5>Для начала тестирования заполните поле ввода имени</h5>
              <hr>
                  <div class="mb-3" style="text-align: center;">
                      <label for="exampleFormControlInput1" class="form-label">Введите ваше имя </label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Иван ">
                  </div>
                  <div class="col-auto" style="text-align: center;">
                      <button type="submit" class="btn btn-primary mb-3">Сохранить</button>
                  </div>
              </div>
          </div>
      </form>
    `;
  }

  init() {
    super.init();
  }

  onClick(event: Event & { target: HTMLInputElement }) {
    if (event.target.type === "submit") {
      const inputValue = this.$root.$el.querySelector("input").value;
      if (inputValue.length <= 3) {
        alert("Введите корректное имя");
      } else {
        const state = this.getStore();
        state.tested.name = inputValue;
        state.tested.id = this.storage;
        storage(this.storage, state);
      }
    }
  }
}
