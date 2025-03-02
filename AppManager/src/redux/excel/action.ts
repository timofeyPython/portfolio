import {
  CHANGE_TEXT,
  TABLE_RESIZE,
  CHANGE_TITLE,
  CHANGE_STYLES,
  APPLY_STYLE,
  UPDATE_DATE,
  UPDATE_ACTIVE_SELECTION,
} from "./types";

// Action Creator

export function tableResize(data: { value: number; type: string; id: string }) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}

export function changeText(text: { id: string; value: string }) {
  return {
    type: CHANGE_TEXT,
    data: text,
  };
}

export function changeTitle(text: string) {
  return {
    type: CHANGE_TITLE,
    data: text,
  };
}

export function changeStyles(data: { [key: string]: string }) {
  return {
    type: CHANGE_STYLES,
    data,
  };
}

export function applyStyle(data: {
  ids: Array<string>;
  value: { [key: string]: string };
}) {
  return {
    type: APPLY_STYLE,
    data,
  };
}

export function updateDate() {
  return {
    type: UPDATE_DATE,
  };
}

export function updateActiveSelection(data: string) {
  return {
    type: UPDATE_ACTIVE_SELECTION,
    data: data,
  };
}
