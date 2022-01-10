import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import userReducer from "redux/reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: { userReducer },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
