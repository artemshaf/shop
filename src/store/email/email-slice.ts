import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { usePostEmailQuery } from "../api";
import { API_URL, URL_EMAIL } from "../consts";
import { RootState, useAppSelector } from "../store";

const name = "email";

interface IInitialState {
  status: "Loading" | "Success" | "Error" | "Idle";
}

const initialState: IInitialState = {
  status: "Idle",
};

interface ISendAction {
  email: string;
  type: string;
}

export const postEmailAsync: any = createAsyncThunk(
  "postEmailAsync",
  async (email: string) => {
    const data = axios.post(API_URL + URL_EMAIL, { body: email });
    return data;
  }
);

const emailSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInitial: (state) => {
      state.status = "Idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postEmailAsync.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(postEmailAsync.rejected, (state) => {
        state.status = "Error";
      })
      .addCase(postEmailAsync.fulfilled, (state) => {
        state.status = "Success";
      });
  },
});

export const { setInitial } = emailSlice.actions;
export const emailReducer = emailSlice.reducer;

export const selectEmailStatus = (state: RootState) => state.email.status;
