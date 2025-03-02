/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInitalState } from "@/types/questionnaire/interfaces";
import {
  UPDATE_TIME,
  UPDATE_END_DATE,
  UPDATE_COUNTER_ANSWERS,
  UPDATE_COUNTER_QUESTIONS,
  UPDATE_ANSWER,
  FINISH,
} from "./types";

export function rootReducer(
  state: IInitalState,
  action: { type: string; data: any },
) {
  // let field, val;

  switch (action.type) {
    case UPDATE_TIME:
      state.tested.passTime = action.data;
      return { ...state };
    case UPDATE_END_DATE:
      state.tested.endDate = action.data;
      return { ...state };
    case UPDATE_COUNTER_ANSWERS:
      state.tested.countAnswers = action.data;
      return { ...state };
    case UPDATE_COUNTER_QUESTIONS:
      state.tested.countQuestions = action.data;
      return { ...state };
    case UPDATE_ANSWER:
      state.tested.answers = action.data;
      return { ...state };
    case FINISH:
      state.tested.finish = action.data;
      return { ...state };
    default:
      return state;
  }
}
