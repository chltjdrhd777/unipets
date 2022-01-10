import { UserState } from "redux/reducers/userReducer";
import axios from "redux/ajax/axios";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

//! access token / refresh token
export const signup = createAsyncThunk("auth/signup", async (data, options) => {
  try {
    const response = await axios.post("/auth/signup", data);

    return {
      data: response.data,
    };
  } catch (err: any) {
    return options.rejectWithValue(err.response);
  }
});

export const afterSignUp = (builder: ActionReducerMapBuilder<UserState>) => {
  builder.addCase(signup.fulfilled, (state, action) => {
    console.log("success", action.payload);
  });
};
