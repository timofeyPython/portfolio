import { IInitalState } from "@/types/questionnaire/interfaces";

export const defaultState: IInitalState = {
  tested: {
    id: "",
    name: null,
    answers: [],
    startDate: new Date(),
    endDate: "",
    passTime: "",
    countAnswers: 0,
    countQuestions: 0,
    finish: false,
  },
};

export const normalizeInitialState = (state: IInitalState) =>
  state ? state : JSON.parse(JSON.stringify(defaultState));
