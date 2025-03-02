import { Dom } from "@/core/dom";

export class TableSelection {
  static className = "selected";
  public current: null | Dom;
  private group: Array<Dom>;

  constructor() {
    this.group = [];
    this.current = null;
  }

  get selectedIds() {
    return this.group.map(($el) => $el._id());
  }

  select($el: Dom) {
    this.clear();
    $el._focus()._addClass(TableSelection.className);
    this.current = $el;
    this.group.push($el);
  }

  clear() {
    this.group.forEach(($el) => $el._removeClass(TableSelection.className));
    this.group = [];
  }

  applyStyle(style: { [key: string]: string }) {
    this.group.forEach(($el) => $el._setCSS(style));
  }

  selectGroup($group: Array<Dom> = []) {
    this.clear();
    this.group = $group;
    this.group.forEach(($el) => $el._addClass(TableSelection.className));
  }
}
