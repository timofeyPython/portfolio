import { $, Dom } from "@core/dom";
import { ExcelComponent } from "@components/excel/ExcelComponent";
import { IQSHeaderOptions } from "@types_/questionnaire/interfaces";
import { utils } from "@/core/utils/utils";
import { changeTitle } from "@/redux/excel/action";
import { ActiveRoute } from "@/core/routes/ActiveRoute";

const { debounce, getHash } = utils();

export class Header extends ExcelComponent {
  static className = "excel__header";

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Header",
      listeners: ["input", "click"],
      subscribe: ["currentText"],
      ...options,
    });
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300);
  }

  toHtml() {
    const title = this.getStore().title; //|| defaultTitle;
    return ` 
      <input type="text" class="input" value="${title}" data-id = "0:0" id="title">
      <div>
        <div class="button" data-button="remove">
          <i class="material-icons" data-button="remove"> delete</i>
        </div>
        <div class="button" data-button="exit">
          <i class="material-icons" data-button="exit">logout</i>
        </div>
      </div>   
    `;
  }

  onInput(event: Event & { target: HTMLInputElement }) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target._text()));
  }
  onClick(event: Event & { target: HTMLInputElement }) {
    const $target = $(event.target);

    if ($target.data.button === "remove") {
      const decision = confirm("Вы действительно хотите удалить эту таблицу?");
      if (decision) {
        localStorage.removeItem(`excel:${getHash()}`);
        ActiveRoute.navigate();
      }
    } else if ($target.data.button === "exit") {
      ActiveRoute.navigate();
    }
  }
}
