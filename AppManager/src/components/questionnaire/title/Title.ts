import { $, Dom } from "@core/dom";
import { QuestionsComponent } from "@components/questionnaire/QuestionsComponents";
import { IQSHeaderOptions } from "@types_/questionnaire/interfaces";
import { observer } from "./title.observer";
import * as actions from "@/redux/questionnaire/action";
import { utils } from "@/core/utils/utils";
import { ITestError } from "@/types/questionnaire/interfaces";
import templateError from "./error";

export class Title extends QuestionsComponent {
  static className = "qs_title";

  public name: string;
  public $root;
  private start;
  private interval: NodeJS.Timeout;
  private counterAnswers;
  private counterQuestions;
  private passTime;
  private endDate;
  private root;

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Title",
      ...options,
      listeners: ["click"],
    });

    const store = this.getStore().tested;
    this.start = new Date(store.startDate);
    this.counterAnswers = +store.countAnswers;
    this.counterQuestions = +store.countQuestions;
    this.passTime = store.passTime;
    this.endDate = store.endDate ? new Date(store.endDate) : null;
    this.name = store.name;
    this.$root = $root;
    this.root = options.root;
  }

  toHtml() {
    return `
      <form>
        <div id="title"> 
          <h4 id="title_h4">
            Тестирование 
          </h4>
          <hr/>
          <div id="pLead">
            <p class="lead">
              Тестирование начал: ${this.name}
            </p>
            <p class="lead">  
              Время начала прохождения тестирования: ${this.start.toLocaleDateString()} ${this.start.toLocaleTimeString()}
            </p>
            <p class="lead" id="time">
              ${this.passTime}
            </p>
            ${
              this.endDate
                ? `  
                  <p class="lead" id="timeEnd">
                    Время завершения: ${this.endDate.toLocaleDateString()} ${this.endDate.toLocaleTimeString()}
                  </p>
                  `
                : ""
            }
          </div>
          <hr/>
          <div class="counter">
            <div id="counter">
                <span>
                  Вы ответили на 
                </span>
                <span data-counter="counter1">
                  ${this.counterAnswers}
                </span> 
                <span>
                  вопросов из 
                </span>
                <span data-counter="counter2">
                  ${this.counterQuestions}
                </span>
              </div>
          </div>
          <div style="margin-top: 25px; text-align: end;">
            <button 
              type="submit" 
              class="btn btn-outline-dark" 
              id="repeat"
            >
              Закончить и начать заново
            </button>
          </div>
        </div>
      </form>
    `;
  }

  init() {
    super.init();

    this.$on("title : updateCounterAnswers", () => this.updateCounterAnswers());
    this.$on("title : updateCounterQuestions", (val: number) =>
      this.updateCounterQuestions(val),
    );
    this.$on("title : startTime", () => this.updateTime());
    this.$on("title : stopTime", () => this.stopTime());
    this.$on("title : finish", () => this.finishTesting());
    this.$on(
      "title : updateTitle",
      (text) => (this.$root._find("#title_h4").textContent = text),
    );

    observer(this.$root.$el, this);
  }

  onClick(event: Event & { target: HTMLInputElement }) {
    if (event.target.id === "repeat") this.$root._removeStorage(this.root);
  }

  updateTime() {
    const { getTime } = utils();
    const interval = setInterval(() => {
      const { hh, mm, ss } = getTime(this.start);
      const content = `Прошло времени: ${hh ? `${hh} часов` : ""} ${mm ? `${mm} минут ` : ""}  ${ss} секунд.`;
      this.$emit("info : updateTime", content);
      this.$dispatch(actions.updateTime(content));
      this.$root._find("#time").innerHTML = content;
    }, 1000);

    this.interval = interval;
  }

  stopTime() {
    setTimeout(() => clearTimeout(this.interval), 1000);

    this.endDate = new Date(this.getStore().tested.endDate);
    const pLead = this.$root._find("#pLead");
    const timeEnd = $.create("p", "lead");
    timeEnd._html(
      `Время завершения: ${this.endDate.toLocaleDateString()} ${this.endDate.toLocaleTimeString()}`,
    );

    pLead.append(timeEnd.$el);
  }

  updateCounterAnswers() {
    this.counterAnswers++;
    this.$dispatch(actions.updateCounterAnswers(this.counterAnswers));
    this.$emit("info : updateCounterAnswers", this.counterAnswers);
    this.$root.$el.querySelector('[data-counter="counter1"]').innerHTML =
      `${this.counterAnswers}`;
  }

  updateCounterQuestions(val: number) {
    this.counterQuestions = val;
    this.$dispatch(actions.updateCounterQuestions(this.counterQuestions));
    this.$emit("info : updateCounterQuestions", +val);
    this.$root.$el.querySelector('[data-counter="counter2"]').innerHTML =
      `${this.counterQuestions}`;
  }

  finishTesting() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        ...this.getStore().tested,
        typeTest: "easy",
      }),
      headers: myHeaders,
    };

    fetch(this.api, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        this.$root.$el.querySelector("#counter").innerHTML = `
          <div>
            <p>Результат:<strong style="color: ${json.testError && json.testError.length > 0 ? "#dc3545" : "#198754"}"> ${json.result}</strong></p>
            <p>${json.message}</p>
            ${
              Array.isArray(json.testError) && json.testError.length > 0
                ? `
                  <h5>Ошибки:</h5>
                  ${json.testError
                    .map((err: ITestError) => templateError(err))
                    .join("")}
                    <hr>
                  `
                : ""
            }
          </div>
        `;
      })
      .catch((error) => console.error(error));
  }
}
