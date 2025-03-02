/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITasks } from "@store/tasks/type";

export interface IData {
  data: Array<ITasks>;
  options?: {
    className: "active" | "inactive";
    title: string;
    show: boolean;
    grId?: string;
    userId?: string;
  };
  fnDispatch: [any, any];
}

export interface ISelectTask {
  selectId: string;
  setShow: (show: boolean) => void;
}

export interface IGetTasks {
  start: Date;
  end: Date;
  grId: string;
  userId: string;
}
