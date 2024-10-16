import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from './tasks/reducer'

export default combineReducers({
    tasks: tasksReducer
})