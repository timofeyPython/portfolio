/* eslint-disable @typescript-eslint/no-explicit-any */
import { HLET } from "@/types/questionnaire/interfaces";

export class Dom {
  public $el: HLET;

  constructor(selector: HLET | string) {
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }
  _html(html: string): { $el: HLET } | string {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }
  _append(node: { $el: HLET }): { $el: HLET } {
    let nodes;
    if (node instanceof Dom) nodes = node.$el;

    if (Element.prototype.append) this.$el.append(nodes);
    else this.$el.appendChild(nodes);

    return this;
  }
  _on(eventType: string, callback: (...arg: any) => void) {
    this.$el.addEventListener(eventType, callback);
  }

  _of(eventType: string, callback: () => void) {
    this.$el.removeEventListener(eventType, callback);
  }

  _find(selector: string) {
    return this.$el.querySelector(selector);
  }

  _findAll(selector: string) {
    return this.$el.querySelectorAll(selector);
  }

  _$find(selector: string) {
    const el: HTMLElement = this.$el.querySelector(selector);
    return $(el);
  }

  _clear() {
    this._html("");
    return this;
  }

  _removeStorage(key: string) {
    localStorage.removeItem(key);
  }

  _delete(selector: string) {
    return this.$el.querySelector(selector).remove();
  }

  _text() {
    if (this.$el.tagName.toLowerCase() === "input") {
      return this.$el.value.trim();
    }
    return this.$el.textContent.trim();
  }

  _$text(val: string) {
    this.$el.textContent = val;
    return this;
  }

  get data() {
    return this.$el.dataset;
  }

  // excel
  _focus() {
    this.$el.focus();
    return this;
  }

  _addClass(className: string) {
    this.$el.classList.add(className);
  }

  _removeClass(className: string) {
    this.$el.classList.remove(className);
  }

  _id(): string {
    return this.data?.id;
  }

  _idParse() {
    const parsed = this._id().split(":");
    return {
      row: +parsed[0],
      col: +parsed[1],
    };
  }

  _closest(selector: string) {
    const el: HTMLElement = this.$el.closest(selector);
    return $(el);
  }

  _setCSS(styles: { [key: string]: any }) {
    Object.keys(styles).forEach(
      (key: "opacity" | "bottom" | "right") =>
        (this.$el.style[key] = styles[key]),
    );
  }

  _getCSS() {
    return {};
  }

  _getStyles(styles: Array<any> = []) {
    return styles.reduce((res, s) => {
      res[s] = this.$el.style[s];
      return res;
    }, {});
  }

  get coords() {
    return this.$el.getBoundingClientRect();
  }
}

export function $(selector: HTMLElement | string) {
  return new Dom(selector);
}

$.create = (tagName: string, classes = "") => {
  const el = document.createElement(tagName);
  if (classes) el.classList.add(classes);

  return $(el);
};
