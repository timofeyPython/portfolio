import { ITasks } from "./type";

const initialState: {
  currentTask: Array<ITasks>;
  endTask: Array<ITasks>;
} = {
  currentTask: [],
  endTask: [],
};

export default initialState;
