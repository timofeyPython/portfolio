import { $, Dom } from "@core/dom";
import { IQSHeaderOptions } from "@/types/questionnaire/interfaces";
import { QuestionsComponent } from "@components/questionnaire/QuestionsComponents";
import { utils } from "@/core/utils/utils";
const { storage } = utils();

export class Main extends QuestionsComponent {
  static className = "qs_main";

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Contents",
      ...options,
      listeners: ["click", "change"],
      subscribe: ["tested"],
    });
  }

  toHtml() {
    return `
        <div class="title">
            <h1 class="display-6">Доступные тесты для прохождения</h1>
            <hr>
        </div>
    `;
  }

  init() {
    this.getData();
  }

  async getData() {
    const url = "http://localhost:3003/api/questionnaire/";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Ошибка получения ${response.status}`);

      const json = await response.json();
      const lists = $.create("div", "lists");
      lists._html(`
        <div style="margin-top: 5%;">
            ${
              Array.isArray(json)
                ? json
                    .map(
                      ({
                        id,
                        title,
                        description,
                        createdAt,
                      }: {
                        id: string;
                        title: string;
                        description: string;
                        createdAt: string;
                      }) => {
                        const state = storage(id);
                        return `
                    <div class="list-group">
                      <a 
                        href="questionnaire/${id}" 
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            ${title}${
                              state?.tested
                                ? state?.tested &&
                                  state?.tested.countAnswers !==
                                    state?.tested.countQuestions
                                  ? " (Начато)"
                                  : "(Закончен)"
                                : ""
                            }
                          </h5>
                          <small>Добавлено${new Date(createdAt).toLocaleDateString()}</small>
                        </div>
                        <p class="mb-1">${description}</p>
                      </a>
                    </div>
                `;
                      },
                    )
                    .join("")
                : ""
            }
        </div>
    `);
      this.$root._append(lists);
    } catch (err) {
      console.error(err.message);
    }
  }
}
