import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "@store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
export const useAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispath: AppDispatch;
}>;
