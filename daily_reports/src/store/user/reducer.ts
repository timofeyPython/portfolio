import { createReducer } from "@reduxjs/toolkit";
import { getAuth } from "./actions";
import user from './initialState'
 
export default createReducer(user, (builder)=> {
    builder.addCase(getAuth.fulfilled, (state, action) => {
         state = action.payload
         return state
    })
})