import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuth, getInfo } from "@services/utils/api";

export const updateUser = createAction("UPDATE");
export const updateAuth = createAsyncThunk("user/getAuth", checkAuth);
export const updateInfo = createAsyncThunk("user/getInfo", getInfo);
