import { IOptionSelect } from "@/types/general";
import { ITask } from "@store/tasks/type";

export interface IData {
  data: Array<ITask>;
}

export interface IPropsOptionsTasks {
  _selectsTC: IOptionSelect[];
  _selectsTG: IOptionSelect[];
  _taskGroup: IOptionSelect | null;
}

export interface IFnUpdateEntry {
  name: string;
  description: string;
  endDate: Date;
  startDate: Date;
  taskCategory: string;
  status: string;
  grId: string;
  id: string;
  statusDescription: string;
}

export interface IGetTasks {
  start: Date;
  end: Date;
  grId: string;
  userId: string;
  active: string;
}

export interface IFnCreateEntry {
  task: string;
  description: string;
  endDate: Date;
  startDate: Date;
  taskCategory: string;
  status: string;
  grId: string;
}
