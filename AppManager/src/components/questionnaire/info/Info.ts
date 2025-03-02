import { Dom } from "@core/dom";
import { QuestionsComponent } from "@components/questionnaire/QuestionsComponents";
import { IQSHeaderOptions } from "@types_/questionnaire/interfaces";

export class Info extends QuestionsComponent {
  static className = "qs_info";

  public $root;
  public name;
  private startDate: Date;
  private counterAnswers;
  private counterQuestions;
  private passTime;

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Info",
      ...options,
    });

    const store = this.getStore().tested;
    this.$root = $root;
    this.startDate = new Date(store.startDate);
    this.endDate = store.endDate;
    this.counterAnswers = +store.countAnswers;
    this.counterQuestions = +store.countQuestions;
    this.passTime = store.passTime;
    this.name = store.name;
  }

  toHtml() {
    return `
      <div class="info" id="info">
        <span>
          Тестирование начал: <strong id="login">${this.name}</strong>
        </span>
        <br>
        <span>
          Время начала ${this.startDate.toLocaleDateString()} ${this.startDate.toLocaleTimeString()}
        </span>
        <br>
        <span id="time">${this.passTime}</span>
        <br>
        <p>
          Вы ответили на
          <span data-counter="counter1">
            ${this.counterAnswers}
          </span>
          из
          <span data-counter="counter2">
            ${this.counterQuestions}
          </span> 
          вопросов
        </p>
      </div> 
    `;
  }

  init() {
    super.init();

    this.$on("info : updateTime", (time: string) => this.updateTime(time));
    this.$on("info : updateCounterAnswers", (text: string) =>
      this.updateCounterAnswers(text),
    );
    this.$on("info : updateCounterQuestions", (text: string) =>
      this.updateCounterQuestions(text),
    );
    this.$on("info : visibleInfo", (status) => this.hidden(status));
    this.$on("info : finish", (fn) => fn(this));
  }

  updateCounterAnswers(text: string) {
    this.$root.$el.querySelector('[data-counter="counter1"]').innerHTML = text;
  }

  updateCounterQuestions(text: string) {
    this.$root.$el.querySelector('[data-counter="counter2"]').innerHTML = text;
  }

  hidden(status: boolean) {
    if (status) this.$root.$el.classList.add("hide");
    else this.$root.$el.classList.remove("hide");
  }

  updateTime(time: string) {
    const content = time;
    this.$root._find("#time").innerHTML = content;
  }
}
