import { createReducer } from "@reduxjs/toolkit"
import { getTasks, createTask } from "./actions"
 
import { ITasks } from "./type"

export default createReducer(Array<ITasks>, (builder)=> {
    builder.addCase(getTasks.fulfilled, (state, action) => {
        state = action.payload
 
        return state
    })

    builder.addCase(createTask.fulfilled, (state, action) => {
 
        state.push(action.payload.entry)
  
        return state
    })
})