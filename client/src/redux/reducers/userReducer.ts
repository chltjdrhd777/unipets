import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export default userSlice.reducer;
