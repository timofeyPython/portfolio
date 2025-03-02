/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CHANGE_TEXT,
  CHANGE_STYLES,
  CHANGE_TITLE,
  TABLE_RESIZE,
  APPLY_STYLE,
  UPDATE_DATE,
  UPDATE_ACTIVE_SELECTION,
} from "./types";

import { IInitalStateExcel } from "@/types/excel/interfaces";
import { utils } from "@/core/utils/utils";

export function rootReducer(state: IInitalStateExcel, action: any) {
  let field;
  let val: any;
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === "col" ? "colState" : "rowState";
      return { ...state, [field]: utils().value(state, field, action) };
    case CHANGE_TEXT:
      field = "dataState";
      return {
        ...state,
        currentText: action.data.value,
        [field]: utils().value(state, field, action),
      };
    case CHANGE_TITLE:
      return { ...state, title: action.data };
    case CHANGE_STYLES:
      return { ...state, currentStyles: action.data };
    case APPLY_STYLE:
      field = "stylesState";
      val = state.stylesState || {};
      action.data.ids.forEach((id: string) => {
        val[id] = { ...val[id], ...action.data.value };
      });
      return {
        ...state,
        [field]: val,
        currentStyles: { ...state.currentStyles, ...action.data.value },
      };
    case UPDATE_DATE:
      return { ...state, openedDate: new Date().toJSON() };
    case UPDATE_ACTIVE_SELECTION:
      return { ...state, ...{ currentActiveCell: action.data } };
    default:
      return state;
  }
}
