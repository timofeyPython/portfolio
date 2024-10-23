import { RootState } from "./store";

export const selectTasks = (state: RootState) => state.entities.tasks
export const selectUser = (state: RootState) => state.entities.user