import { IOptionSelect } from "@/types/general";
import { IFnCreateEntry, IFnUpdateEntry, IPropsOptionsTasks } from "./type";
import { ITask } from "@/store/tasks/type";

export interface ICreateCategoryTaskProps {
  setShow: (val: boolean) => void;
  show: boolean;
  setSelectsTC: (array: Array<{ value: string; label: string }>) => void;
  selectsTC: Array<{ value: string; label: string }>;
}

export interface ICreateTaskProps extends IPropsOptionsTasks {
  setShow: (show: boolean) => void;
  _createEntry: (args: IFnCreateEntry) => void;
}

export interface IDataFormTaskProps {
  title: string;
  onInput: (val: string) => void;
  onInput1: (val: string) => void;
  value?: string;
  value1?: string;
  selectsTC: Array<IOptionSelect>;
  taskCategory: IOptionSelect | null;
  startDate: Date;
  endDate: Date;
  setTaskCategory: (val: IOptionSelect) => void;
  setSelectsTC: (val: Array<IOptionSelect>) => void;
  setStartDate: (val: Date) => void;
  setEndDate: (val: Date) => void;
  children?: JSX.Element;
  selectsTG: Array<IOptionSelect>;
  taskGroup: IOptionSelect | null;
  setTaskGroup: (val: IOptionSelect) => void;
}

export interface ISelectTaskProps extends IPropsOptionsTasks {
  setShow: (show: boolean) => void;
  task: ITask;
  _deleteEntry: (id: string) => void;
  _updateEntry: (args: IFnUpdateEntry) => void;
}

export interface IListsTaskProps {
  grId: string;
  userId: string;
  change(id: string): void;
}

export interface IListProps {
  entry: ITask;
  fn?(id: string): void;
  i: number;
}

export interface ITaskProps {
  grId: string;
  id: string;
  name: string;
  title: string;
  createdUserId: string;
  createdUserName: string;
}
