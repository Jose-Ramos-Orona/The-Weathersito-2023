import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "../../../mocks/initialState";
import { PredictionStructure } from "./types";

export interface PredictionState {
  prediction: PredictionStructure;
}

export const initialPredictionState: PredictionState = {
  prediction: initialState,
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
