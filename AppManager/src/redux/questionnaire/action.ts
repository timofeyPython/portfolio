import {
  UPDATE_TIME,
  UPDATE_COUNTER_ANSWERS,
  UPDATE_COUNTER_QUESTIONS,
  UPDATE_END_DATE,
  UPDATE_ANSWER,
  FINISH,
  UPDATE_ID,
} from "./types";

export function updateId(data: string) {
  return {
    type: UPDATE_ID,
    data,
  };
}

export function updateTime(data: string) {
  return {
    type: UPDATE_TIME,
    data,
  };
}

export function updateEndTime(data: string) {
  return {
    type: UPDATE_END_DATE,
    data,
  };
}

export function updateCounterAnswers(data: number) {
  return {
    type: UPDATE_COUNTER_ANSWERS,
    data,
  };
}

export function updateCounterQuestions(data: number) {
  return {
    type: UPDATE_COUNTER_QUESTIONS,
    data,
  };
}
export function updateAnswers(
  data: Array<{
    questionId: string;
    answerId: string;
    date: Date;
  }>,
) {
  return {
    type: UPDATE_ANSWER,
    data,
  };
}

export function finish(data: boolean) {
  return {
    type: FINISH,
    data,
  };
}
