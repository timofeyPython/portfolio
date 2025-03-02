import { $, Dom } from "@/core/dom";
import { IEventTarget } from "@/types/interfaces";

export function range(start: number, end: number) {
  if (start > end) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1).fill("").map((_, index) => start + index);
}

export class TableActions {
  static getResize(event: IEventTarget): boolean {
    return event.target?.dataset?.resize ? true : false;
  }

  static resizeHandler($root: Dom, event: IEventTarget) {
    return new Promise<{
      value: number;
      type: string;
      id: string;
    }>((resolve) => {
      const $resizer = $(event.target);
      const $parent = $resizer._closest('[data-type="resizable"]');
      const coords = $parent.coords;
      const type = $resizer.data?.resize;
      const sideProp = type === "col" ? "bottom" : "right";
      let value = 0;

      $resizer._setCSS({
        opacity: 1,
        [sideProp]: "-5000px",
      });
      // действие при клике на реасайзер и удержании левого клика.
      document.onmousemove = (e) => {
        if (type === "col") {
          const delta = e.pageX - coords.right;
          value = coords.width + delta;
          $resizer._setCSS({
            right: -delta + "px",
          });
        } else {
          const delta = e.pageY - coords.bottom;
          value = coords.height + delta;
          $resizer._setCSS({
            bottom: -delta + "px",
          });
        }
      };

      // действие при отускании клика
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        // логика с ячейками
        if (type === "col") {
          $parent._setCSS({
            width: value + "px",
          });
          $root
            ._findAll(`[data-col="${$parent.data?.col}"]`)
            .forEach((row: HTMLElement) => (row.style.width = value + "px"));
        } else {
          $parent._setCSS({
            height: value + "px",
          });
        }

        resolve({
          value,
          type,
          id: $parent.data[type],
        });
        $resizer._setCSS({
          opacity: 0,
          bottom: 0,
          right: 0,
        });
      };
    });
  }

  static nextSelector({
    col,
    row,
    key,
    maxCol,
    maxRow,
  }: {
    col: number;
    row: number;
    key: string;
    maxCol: number;
    maxRow: number;
  }) {
    const MIN_VALUE = 0;
    const MAX_COL = maxCol;
    const MAX_ROW = maxRow;
    switch (key) {
      case "ArrowDown":
      case "Enter":
        row = row + 1 > MAX_ROW ? row : row + 1;
        break;
      case "ArrowLeft":
        col = col - 1 < MIN_VALUE ? col : col - 1;
        break;
      case "Tab":
      case "ArrowRight":
        col = col + 1 > MAX_COL ? col : col + 1;
        break;
      case "ArrowUp":
        row = row - 1 < MIN_VALUE ? row : row - 1;
    }
    return `[data-id="${row}:${col}"]`;
  }

  static matrix($target: Dom, $current: Dom) {
    const target = $target._idParse();
    const current = $current._idParse();
    const cols = range(current.col, target.col);
    const rows = range(current.row, target.row);

    return cols.reduce((acc, col) => {
      rows.forEach((row) => acc.push(`${row}:${col}`));
      return acc;
    }, []);
  }
}
