import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientAPI } from "@services/utils/clientApi";
import { ICreateTask, ITaskUpdate } from "./type";
import { IGetTasks } from "@/components/forms/MyTasks/type";

export const getCurrentTasks = createAsyncThunk(
  "tasks/getTasks",
  async (parameters: IGetTasks) => {
    const api = clientAPI({
      method: "GET",
      parameters: { ...parameters, status: false },
      path: "tasks",
    });
    const response = await api();
    return response;
  },
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (data: ICreateTask) => {
    const api = clientAPI({
      method: "POST",
      data,
      path: "tasks",
    });
    const response = await api();
    return response;
  },
);

export const getsEndTasks = createAsyncThunk(
  "tasks/getTasksEnd",
  async (parameters: IGetTasks) => {
    const api = clientAPI({
      method: "GET",
      parameters: { status: true, ...parameters },
      path: "tasks",
    });
    const response = await api();
    return response;
  },
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (data: ITaskUpdate) => {
    const api = clientAPI({
      method: "PUT",
      data,
      path: "tasks",
    });
    const response = await api();
    return response;
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    const api = clientAPI({
      method: "DELETE",
      parameters: id,
      path: "tasks",
    });
    const response = await api();
    return response;
  },
);
