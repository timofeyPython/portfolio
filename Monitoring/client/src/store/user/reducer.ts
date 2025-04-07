import { createReducer } from "@reduxjs/toolkit";
import { updateAuth } from "./actions";
import user from "./initialState";

export default createReducer(user(), (builder) => {
  builder.addCase(updateAuth.fulfilled, (state, action) => {
    if (action.payload && action.payload.refreshToken) {
      state.isAuth = true;
      state.info = action.payload.info;
    } else {
      state.isAuth = false;
    }
    return state;
  });
});
