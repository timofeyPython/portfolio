import { $, Dom } from "@core/dom";
import { MyProjectComponents } from "@components/myprojects/myProjectComponents";
import { IQSHeaderOptions } from "@/types/questionnaire/interfaces";
import { listsJob } from "./data";
import col from "./col";
import modal from "@/components/UI/modal";
import card from "./card";

export class Contents extends MyProjectComponents {
  static className = "main_contents";

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Contents",
      ...options,
    });
    this.modal = false;
  }

  toHtml() {
    return `
        <div class="contents">
            <h2 class="display-6" style="text-align: center; margin-bottom: 4rem;">
                Вам представлен список моих работ в разных направлениях
            </h2>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                  ${listsJob.map((list) => col(list)).join("")}
                </div>
            </div>
        </div>
    `;
  }

  init() {
    super.init();
    this.colListener();
  }

  colListener() {
    const cards = this.$root.$el.getElementsByClassName("card");
    for (const [key, value] of Object.entries(cards))
      $(<HTMLElement>value)._on("click", () =>
        modal(card(listsJob[+key]), this.$root),
      );
  }
}
