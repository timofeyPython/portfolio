/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from "@core/store/Store";

interface IElementPlus extends HTMLElement {}
interface IEl extends IElementPlus {}

export interface HLET extends IEl {
  value?: string;
}

export interface IClasses extends Page {
  params: any;
  destroy: () => void;
}

// Page
export interface Page {
  getRoot: () => { $el: HLET };
  afterRender: any;
}

export interface IQSHeaderOptions {
  name: string;
  listeners: Array<string>;
  emitter: any;
  store: Store;
  subscribe: Array<any>;
  root: string;
}

// Routers
export interface IRoutes {
  path: string;
  template: any;
  storage?: string;
}

// Emiiter
export interface IEmitter {
  listeners: any;
  emit?: (event: string, ...args: Array<Element>) => boolean;
  subscribe?: (event: string | number, fn: any) => any;
}

export interface IInitalState {
  [tested: string]: {
    id: string;
    name: null | string;
    answers: Array<{
      questionId: string;
      answerId: string;
      date: Date;
      save: boolean;
    }>;
    startDate: Date;
    endDate: Date | "";
    passTime: string;
    countAnswers: number;
    countQuestions: number;
    finish: boolean;
  };
}

export interface ITestError {
  answerCorrectId: string;
  answerUserId: string;
  id: string;
  number: number;
  options: Array<{
    id: string;
    description: string;
  }>;
  question: string;
}
