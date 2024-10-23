import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from './tasks/reducer'
import userReducer from './user/reducer'

export default combineReducers({
    tasks: tasksReducer,
    user: userReducer
})