import { Dom } from "@core/dom";
import { QuestionsComponent } from "@components/questionnaire/QuestionsComponents";
import { IQSHeaderOptions } from "@types_/questionnaire/interfaces";
import iconHome from "@assets/icon/home.png";

export class Header extends QuestionsComponent {
  static className = "qs_header";

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Header",
      ...options,
      listeners: ["click"],
    });
  }

  toHtml() {
    return `
            <div class="head">
                <a><img src="${iconHome}" class="qs_img" id="close"></a>
                <div class="head">
                  <h6>Questionnaire</h6>
                  <div id='time'> Текущее время: ${new Date().toLocaleTimeString()}</div>
                </div>
            </div>
        `;
  }

  init() {
    super.init();
    this.updateTime();
  }

  onClick(event: Event & { target: HTMLInputElement }) {
    if ((event.target as HTMLElement).id === "close") {
      this.destroy();
      window.location.replace("/questionnaire");
    }
  }

  updateTime() {
    setInterval(
      () =>
        (this.$root._find("#time").innerHTML =
          `Текущее время: ${new Date().toLocaleTimeString()}`),
      1000,
    );
  }
}
