import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuth } from "@/services/api/apiAuth";

export const updateUser = createAction("UPDATE");
export const updateAuth = createAsyncThunk("user/getAuth", checkAuth);
