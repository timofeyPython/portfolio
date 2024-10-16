import { createAsyncThunk } from "@reduxjs/toolkit"
import { clientAPI } from "../../services/utils/api"
 
export const getTasks = createAsyncThunk(
    'tasks/getTasks', 
    clientAPI({
        method: 'GET', 
        parameters: {
            gr: '0338eef3-0432-4fe1-960f-085c73971458'
        },
        path: 'tasks'
    })
)