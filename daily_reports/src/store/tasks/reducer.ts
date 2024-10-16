import { createReducer } from "@reduxjs/toolkit"
import { addTask, removeTask } from "./actions"
import { getTasks } from "./api"
import { ITasks } from "./type"

 

export default createReducer(Array<ITasks>, (builder)=> {
    builder.addCase(getTasks.fulfilled, (state, action) => {
        state = action.payload
 
        return state
    })
    builder.addCase(removeTask, (state) => {
        state.pop()
        return state
    })
})

 