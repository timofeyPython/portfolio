import { createReducer } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { getGroup } from "./actions";

export default createReducer(initialState, (builder) => {
  builder.addCase(getGroup.fulfilled, (state, action) => {
    state.group = action.payload;
    return state;
  });
});
