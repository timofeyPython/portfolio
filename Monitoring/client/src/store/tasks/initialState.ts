import { ITask } from "./type";

const initialState: {
  tasks: Array<ITask>;
  selectTask: ITask | null;
} = {
  tasks: [],
  selectTask: null,
};

export default initialState;
