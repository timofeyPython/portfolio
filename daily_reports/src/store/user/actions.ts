import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { checkAuth } from "../../services/utils/auth"

export const updateUser = createAction('UPDATE')
export const getAuth = createAsyncThunk(
    'user/getAuth',
    checkAuth
)