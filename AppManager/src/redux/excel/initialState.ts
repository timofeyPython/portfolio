import {
  defaultStyles,
  defaultTitle,
  openedDate,
} from "@/core/utils/constants";
import { IInitalStateExcel } from "@/types/excel/interfaces";

export const defaultState: IInitalStateExcel = {
  title: defaultTitle,
  colState: {},
  currentStyles: defaultStyles,
  currentText: "",
  currentActiveCell: "0:0",
  dataState: {},
  openedDate,
  rowState: {},
  stylesState: {},
};

const normalize = (state: IInitalStateExcel) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: "",
});

export const normalizeInitialStateExcel = (state: IInitalStateExcel) =>
  state ? state : normalize(defaultState);
