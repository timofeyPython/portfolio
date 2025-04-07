import { createReducer } from "@reduxjs/toolkit";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTask,
  clearTask,
} from "./actions";
import initialState from "./initialState";

export default createReducer(initialState, (builder) => {
  builder.addCase(getTasks.fulfilled, (state, action) => {
    state.tasks = action.payload;
    return state;
  });

  builder.addCase(getTask.fulfilled, (state, action) => {
    state.selectTask = action.payload;
    return state;
  });

  builder.addCase(clearTask.fulfilled, (state, action) => {
    state.selectTask = action.payload;
    return state;
  });

  builder.addCase(createTask.fulfilled, (state, action) => {
    state.tasks.unshift(action.payload.entry);
    return state;
  });

  builder.addCase(updateTask.fulfilled, (state, action) => {
    if (action.payload.entry?.stage?.current?.status === "3") {
      state.tasks = state.tasks.filter(
        (entry) => entry.id !== action.payload?.entry?.id,
      );
    } else {
      state.tasks = state.tasks.map((entry) =>
        entry?.id === action.payload?.entry?.id ? action.payload?.entry : entry,
      );
    }
    return state;
  });

  builder.addCase(deleteTask.fulfilled, (state, action) => {
    state.tasks = state.tasks.filter((entry) => entry.id !== action.payload.id);
    return state;
  });
});
