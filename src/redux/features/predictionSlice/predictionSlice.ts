import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PredictionStructure } from "./types";

export interface PredictionState {
  prediction?: PredictionStructure;
}

export const initialPredictionState: PredictionState = {
  prediction: {} as PredictionStructure,
};

const predictionSlice = createSlice({
  name: "prediction",
  initialState: initialPredictionState,
  reducers: {
    getPrediction: (
      initialstate,
      action: PayloadAction<PredictionStructure>
    ): PredictionState => ({
      ...initialstate,
      prediction: { ...action.payload },
    }),
  },
});

export const predictionReducer = predictionSlice.reducer;

export const { getPrediction: getPredictionActionCreator } =
  predictionSlice.actions;
