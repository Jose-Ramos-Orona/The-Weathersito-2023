import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { predictionReducer } from "./features/predictionSlice/predictionSlice";

export const store = configureStore({
  reducer: { prediction: predictionReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
