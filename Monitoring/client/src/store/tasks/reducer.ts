import { createReducer } from "@reduxjs/toolkit";
import {
  getCurrentTasks,
  createTask,
  getsEndTasks,
  updateTask,
  deleteTask,
} from "./actions";
import initialState from "./initialState";

export default createReducer(initialState, (builder) => {
  builder.addCase(getCurrentTasks.fulfilled, (state, action) => {
    state.currentTask = action.payload;
    return state;
  });

  builder.addCase(createTask.fulfilled, (state, action) => {
    state.currentTask.unshift(action.payload.entry);
    return state;
  });

  builder.addCase(getsEndTasks.fulfilled, (state, action) => {
    state.currentTask = action.payload;
    return state;
  });

  builder.addCase(updateTask.fulfilled, (state, action) => {
    if (action.payload.entry?.stage?.current?.status === "3") {
      state.endTask.push(action.payload.entry);
      state.currentTask = state.currentTask.filter(
        (entry) => entry.id !== action.payload.entry.id,
      );
    } else {
      state.currentTask = state.currentTask.map((entry) =>
        entry.id === action.payload.entry?.id ? action.payload.entry : entry,
      );
    }
    return state;
  });

  builder.addCase(deleteTask.fulfilled, (state, action) => {
    state.currentTask = state.currentTask.filter(
      (entry) => entry.id !== action.payload.id,
    );
    return state;
  });
});
