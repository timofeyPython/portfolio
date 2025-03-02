import { createReducer } from "@reduxjs/toolkit";
import { updateAuth, updateInfo } from "./actions";
import user from "./initialState";

export default createReducer(user(), (builder) => {
  builder.addCase(updateAuth.fulfilled, (state, action) => {
    if (action.payload && action.payload.refreshToken) state.isAuth = true;
    return state;
  });

  builder.addCase(updateInfo.fulfilled, (state, action) => {
    if (action.payload) state.info = action.payload;
    return state;
  });
});
