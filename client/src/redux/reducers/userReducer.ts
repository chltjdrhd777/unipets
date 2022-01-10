import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "redux/store";

export interface UserState {
  login: boolean;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
  },
  reducers: { test() {} },
  extraReducers: (builder) => {},
});

export const { test } = userSlice.actions;
export const selectUser = (state: AppState) => state.userReducer;

export default userSlice.reducer;
