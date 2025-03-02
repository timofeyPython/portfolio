import { IQSHeaderOptions } from "@/types/questionnaire/interfaces";
import { ExcelComponent } from "./ExcelComponent";
import { Dom } from "@/core/dom";
import { IInitalStateExcel } from "@/types/excel/interfaces";

export class ExcelStateComponent extends ExcelComponent {
  public state: IInitalStateExcel;

  constructor(...args: [Dom, IQSHeaderOptions]) {
    super(...args);
    if (!this.state) this.state = this.store.getState();
  }

  get template() {
    return JSON.stringify(this.state);
  }

  initState(initialState: IInitalStateExcel) {
    this.state = { ...initialState };
  }

  setState(newState: IInitalStateExcel) {
    this.state = { ...this.state, ...newState };
    this.$root._html(this.template);
  }
}
