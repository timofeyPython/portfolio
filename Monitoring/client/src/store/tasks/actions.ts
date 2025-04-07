import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientAPI } from "@services/utils/clientApi";
import { ICreateTask, ITask, ITaskUpdate } from "./type";
import { IGetTasks } from "@/components/forms/Task/types/type";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (parameters: IGetTasks) => {
    const api = clientAPI<ITask[]>({
      method: "GET",
      parameters: { ...parameters },
      path: "tasks",
    });
    const response = await api();
    return response;
  },
);

export const clearTask = createAsyncThunk("tasks/clear", () => {
  return null;
});

export const getTask = createAsyncThunk("tasks/getTask", async (id: string) => {
  const api = clientAPI<ITask>({
    method: "GET",
    path: `tasks/${id}`,
  });
  const response = await api();
  return response;
});

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (data: ICreateTask) => {
    const api = clientAPI<{ entry: ITask }>({
      method: "POST",
      data,
      path: "tasks",
    });
    const response = await api();
    return response;
  },
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (data: ITaskUpdate) => {
    const api = clientAPI<{ entry: ITask }>({
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
    const api = clientAPI<{ id: string }>({
      method: "DELETE",
      parameters: { id },
      path: "tasks",
    });
    const response = await api();
    return response;
  },
);
