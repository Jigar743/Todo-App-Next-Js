import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "@/Client/Store/AuthSlice";
import todoReducer from "@/Client/Store/TodoSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    todoReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
