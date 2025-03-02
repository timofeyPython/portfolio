import { clientAPI } from "@/services/utils/clientApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGroup = createAsyncThunk(
  "groups/getGroup",
  async (parameters: { gr: string }) => {
    const api = clientAPI({
      method: "GET",
      parameters,
      path: "groups",
    });
    const response = await api();
    return response;
  },
);
