import { QuestionsComponent } from "@components/questionnaire/QuestionsComponents";
import { IQSHeaderOptions } from "@/types/questionnaire/interfaces";
import * as actions from "@/redux/questionnaire/action";
import { Dom } from "@core/dom";
import question from "./question";

export class Questions extends QuestionsComponent {
  static className = "qs_contents";
  private answers: Array<{
    questionId: string;
    answerId: string;
    date: Date;
    save: boolean;
  }>;
  private questions: Array<{
    id: string;
    number: number;
    question: string;
    options: Array<{
      id: string;
      description: string;
    }>;
  }>;
  private root;

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Contents",
      ...options,
      listeners: ["click", "change"],
      subscribe: ["tested"],
    });

    this.answers = this.getStore().tested.answers || [];
    this.questions = [];
    this.root = options.root;
  }

  toHtml() {
    return `
      ${
        Array.isArray(this.questions) && this.questions.length > 0
          ? `${this.questions
              .map((entry) =>
                question(
                  { ...entry },
                  this.getStore().tested?.answers.find(
                    (answer) =>
                      answer.questionId === entry.id && answer.answerId,
                  ) || null,
                ),
              )
              .join("")}
        <div style="padding: 50px;">
          <button
            class="btn btn-outline-dark"
            style="border-radius: 0px;"
            id="finish"
          >Завершить тестирование</button>
        </div> 
        `
          : ""
      }
      `;
  }

  init() {
    this.getData();
  }

  addListeners() {
    this.$emit("title : updateCounterQuestions", this.questions.length);
    if (
      this.answers.length === this.questions.length &&
      !this.answers.find((answer) => !answer.save) &&
      this.getStore().tested.finish
    ) {
      this.$root._clear();
      this.$emit("title : finish");
    } else {
      this.sectionListeners();
      super.init();
      this.$emit("title : startTime");
    }
  }

  sectionListeners() {
    const sections = this.$root.$el.querySelectorAll("section");
    sections.forEach((section) => {
      const button = section.querySelector("button");
      if (button) {
        button.addEventListener(
          "click",
          (event: Event & { target: HTMLInputElement }) => {
            if (this.changeAnswer(section.dataset.section)) {
              this.answers = this.answers.map((answer) =>
                answer.questionId === event.target.id
                  ? { ...answer, ...{ save: true } }
                  : answer,
              );
              this.$dispatch(actions.updateAnswers(this.answers));
              button.remove();
              section
                .querySelectorAll("input")
                .forEach((input) => (input.disabled = true));
            } else {
              event.stopPropagation();
              event.preventDefault();
            }
          },
        );
      }
    });
  }

  changeAnswer(id: string): boolean {
    if (
      this.answers.find((answer) => answer.questionId === id && answer.answerId)
    ) {
      this.selectQuestion = null;
      return true;
    } else {
      alert(`Hе выбран вариант ответа для вопроса ${id}`);
      return false;
    }
  }

  getData() {
    fetch(`${this.api}${this.root}`)
      .then((response) => response.json())
      .then((json) => {
        this.questions = json.questions;
        this.destroy();
        this.$root._html(this.toHtml());
        this.addListeners();
        this.$emit("title : updateTitle", json.title);
      });
  }

  onClick(event: Event & { target: HTMLInputElement }) {
    if (event.target.tagName === "BUTTON") {
      event.preventDefault();

      if (event.target.id === "finish") {
        if (
          this.answers.length === this.questions.length &&
          !this.answers.find((answer) => !answer.save)
        ) {
          this.$dispatch(actions.finish(true));
          this.$dispatch(actions.updateEndTime(new Date().toString()));
          this.$root._clear();
          this.$emit("title : finish");
          this.$emit("title : stopTime");
        } else {
          const message = this.questions
            .map((question, i) =>
              !this.answers.find(
                (answer) => answer.questionId === question.id && answer.save,
              )
                ? `${i + 1}: ${question.question}`
                : "",
            )
            .join("\n");

          alert(`Ответьте на вопросы: \n${message}`);
        }
      } else {
        this.$emit("title : updateCounterAnswers");
      }
    }
  }

  onChange(event: Event & { target: HTMLInputElement }) {
    if (
      this.answers.find(
        (answer) => answer.questionId === event.target.dataset.question,
      )
    ) {
      this.answers = this.answers.map((answer) =>
        answer.questionId === event.target.dataset.question
          ? {
              questionId: event.target.dataset?.question,
              answerId: event.target.dataset?.answer,
              date: new Date(),
              save: false,
            }
          : answer,
      );
    } else {
      this.answers.push({
        questionId: event.target.dataset?.question,
        answerId: event.target.dataset?.answer,
        date: new Date(),
        save: false,
      });
    }
  }
}
