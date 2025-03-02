import { defaultStyles } from "@/core/utils/constants";
import { utils } from "@/core/utils/utils";
import { IInitalStateExcel } from "@/types/excel/interfaces";

const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 25;

function getWidth(state: { [key: string]: number }, index: number) {
  return (state[index] || DEFAULT_WIDTH) + "px";
}

function getHeight(state: { [key: string]: number }, index: number) {
  return (state[index] || DEFAULT_HEIGHT) + "px";
}

function toColumn({
  col,
  index,
  width,
}: {
  col: string;
  index: number;
  width: string;
}) {
  return `
    <div
        class="column"
        data-type="resizable"
        data-col="${index}"  
        style="width: ${width}"  
    >
        ${col}
        <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

function createRow(
  index: number | null,
  content: string,
  state: { [key: string]: number },
) {
  const resize = index
    ? '<div class="row-resize" data-resize="row"></div>'
    : "";
  const height = getHeight(state, index);
  return `
    <div class="et_row"
        class="et_row" 
        data-type="resizable" 
        data-row=${index} 
        style="height:${height};"
    >
        <div class="row-info">
          ${index ? index : ""}
          ${resize}
        </div>
        <div class="row-data">${content}</div>
    </div>
    
  `;
}

function toChar(_: string, index: number) {
  return String.fromCharCode(CODES.A + index);
}

function withWidthFrom(state: IInitalStateExcel) {
  return function (col: string, index: number) {
    return {
      col,
      index,
      width: getWidth(state.colState, index),
    };
  };
}

function toCell(state: IInitalStateExcel, row: number) {
  return function (_: number, col: number) {
    const id = `${row}:${col}`;
    const width = getWidth(state.colState, col);
    const data = state.dataState[id];
    const styles = utils().toInlineStyle({
      ...defaultStyles,
      ...state.stylesState[id],
    });
    return `
        <div 
          class="cell" 
          contenteditable 
          data-col="${col}"
          data-type="cell"
          data-id=${id}
          data-value= "${data || ""}"
          style="${styles}; width:${width}"
        >${data ? data : ""}</div>
      `;
  };
}

export function createTable(rowsCount = 15, state: IInitalStateExcel) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map(withWidthFrom(state))
    .map(toColumn)
    .join("");

  rows.push(createRow(null, cols, {}));

  for (let row = 0; rowsCount > row; row++) {
    const cells = new Array(colsCount)
      .fill("")
      .map(toCell(state, row))
      .join("");

    rows.push(createRow(row + 1, cells, state.rowState));
  }

  return rows.join("");
}
