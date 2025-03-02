import { $, Dom } from "@core/dom";
import { ExcelStateComponent } from "@components/excel/ExcelStateComponent";
import { IQSHeaderOptions } from "@types_/questionnaire/interfaces";
import { createToolbar } from "./toolbar.template";
import { IInitalStateExcel } from "@/types/excel/interfaces";

export class Toolbar extends ExcelStateComponent {
  static className = "excel__toolbar";

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
      ...options,
      subscribe: ["currentStyles"],
    });
  }

  prepare() {
    this.initState(this.getStore());
  }

  get template() {
    return createToolbar(this.state.currentStyles);
  }

  toHtml() {
    return this.template;
  }

  storeChanged(changes: IInitalStateExcel) {
    this.setState(changes);
  }

  onClick(event: Event & { target: HTMLInputElement }) {
    const $target = $(event.target);
    if ($target.data.type === "button") {
      const value = JSON.parse($target.data?.value);
      this.$emit("toolbar : applyStyle", value);
    }
  }
}
