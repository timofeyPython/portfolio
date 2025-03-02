/* eslint-disable @typescript-eslint/no-explicit-any */
import { $, Dom } from "@/core/dom";
import { IQSHeaderOptions } from "@types_/questionnaire/interfaces";
import { createTable } from "./table.template";
import * as actions from "@redux/excel/action";
import { TableSelection } from "./TableSelection";
import { ExcelStateComponent } from "../../ExcelStateComponent";
import { TableActions } from "./TableActions";
import { IEventTarget } from "@/types/interfaces";
import { defaultStyles } from "@/core/utils/constants";

export class Table extends ExcelStateComponent {
  static className = "excel__table";
  private unsub: Array<any>;
  private selection;

  constructor($root: Dom, options: IQSHeaderOptions) {
    super($root, {
      name: "Table",
      listeners: ["mousedown", "keydown", "input"],
      ...options,
    });
    this.unsub = [];
    this.selection = new TableSelection();
  }

  toHtml() {
    return createTable(20, this.getStore());
  }

  init() {
    super.init();
    this.selectCell(
      this.$root._$find(`[data-id="${this.getStore().currentActiveCell}"]`),
    );
    this.$emit("table : select", this.selection.current._text());
    this.$on("formula : input", (text: string) => {
      this.selection.current._$text(text);
      this.updateTextInStore(text);
    });
    this.$on("formula : done", () => this.selection.current._focus());
    this.$on("toolbar : applyStyle", (value) => {
      this.selection.applyStyle(value);
      this.$dispatch(
        actions.applyStyle({
          value,
          ids: this.selection.selectedIds,
        }),
      );
    });
  }

  onMousedown(event: IEventTarget & any) {
    if (TableActions.getResize(event)) {
      this.resizeTable(event);
    } else {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $cells = TableActions.matrix($target, this.selection.current).map(
          (id) => this.$root._$find(`[data-id ="${id}"]`),
        );
        this.selection.selectGroup($cells);
      } else {
        this.selectCell($target);
        this.$emit("table : select", $target._text());
      }
    }
  }

  onKeydown(event: KeyboardEvent) {
    const keys = [
      "Enter",
      "Tab",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];
    const { key } = event;
    if (keys.includes(key)) {
      event.preventDefault();
      const currentId = this.selection.current._idParse();
      this.selectCell(
        this.$root._$find(
          TableActions.nextSelector({
            ...currentId,
            key,
            ...{ maxCol: 25, maxRow: 19 },
          }),
        ),
      );
    }
  }

  onInput(event: IEventTarget) {
    this.updateTextInStore(event.target.textContent);
  }

  selectCell($cell: Dom) {
    this.selection.select($cell);
    const styles = $cell._getStyles(Object.keys(defaultStyles));
    this.$dispatch(actions.changeStyles(styles));
    this.$dispatch(
      actions.updateActiveSelection(this.selection.current.data?.id),
    );
  }

  resizeTable(event: IEventTarget) {
    try {
      const data = TableActions.resizeHandler(this.$root, event);
      data.then((res) => this.$dispatch(actions.tableResize(res)));
    } catch (e) {
      console.log(`Ошибка в изменение размера, подробности:${e}`);
    }
  }

  updateTextInStore(value: string) {
    this.$dispatch(
      actions.changeText({
        id: this.selection.current._id(),
        value,
      }),
    );
  }
}
