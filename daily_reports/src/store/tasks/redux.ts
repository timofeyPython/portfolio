import { createReducer } from "@reduxjs/toolkit";
import { addTask, removeTask } from "./actions";
import { createAppAsyncThunk } from "../store";
 
 

export const fetchTasks = createAppAsyncThunk('')
 

export default createReducer(Array<{title: string}>, (builder)=> {
    builder.addCase(addTask, (state, action) => {
 
     
        state.push(action.payload)
       
    })

    builder.addCase(removeTask, (state, action) => {
        state.pop()
 
    })

    builder.addCase(fetchTasks.pending, state=> {

        console.log(state)
        state = [{title: 'good'}]
    })
})

 
 