import { Dom } from "@core/dom";
import { ExcelComponent } from "@components/excel/ExcelComponent";
import { IQSHeaderOptions } from "@types_/questionnaire/interfaces";
import { IEventTarget } from "@/types/interfaces";

export class Formula extends ExcelComponent {
  static className = "excel__formula";
  private $formula: null | Dom;

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Formula",
      listeners: ["input", "keydown"],
      subscribe: ["currentText"],
      ...options,
    });
    this.$formula = null;
  }

  toHtml() {
    return ` 
      <div class="_info">fx</div>
      <div 
        class="input" 
        id = 'formula' 
        contenteditable="true"
        spellcheck="false"
      >
      </div>
    `;
  }

  init() {
    super.init();
    this.$formula = this.$root._$find("#formula");
    this.$on("table : select", (text: string) => this.$formula._$text(text));
  }

  storeChanged({ currentText }: { currentText: string }) {
    this.$formula._$text(currentText);
  }

  onInput(event: IEventTarget) {
    this.$emit("formula : input", event.target.textContent);
  }

  onKeydown(event: KeyboardEvent) {
    const keys = ["Tab", "Enter"];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit("formula : done");
    }
  }
}
