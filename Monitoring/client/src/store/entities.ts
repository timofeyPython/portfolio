import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "@store/tasks/reducer";
import userReducer from "@store/user/reducer";

export default combineReducers({
  tasks: tasksReducer,
  user: userReducer,
});
