import { createAsyncThunk } from "@reduxjs/toolkit"
import { clientAPI } from "../../services/utils/api"

export const getTasks = createAsyncThunk(
    'tasks/getTasks', 
    async (parameters, thunkAPI) => {
      const api = clientAPI({
            method: 'GET', 
            parameters,
            path: 'tasks'
        })
    const response = await api()
    return response
    }
)

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (data: any, thunkApi) => {
       const api = clientAPI({
            method: 'POST',
            data,
            path: 'tasks'
        })
        const response = await api()
        return response
    }
)