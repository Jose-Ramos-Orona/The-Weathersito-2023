import mockPrediction from "../../../mocks/mockPrediction";
import mockPredictionInitialState from "../../../mocks/mockPredictionInitialState";
import {
  getPredictionActionCreator,
  predictionReducer,
  PredictionState,
} from "./predictionSlice";

describe("Given a function predictionSlice", () => {
  describe("When it receives an initial state and an unknown action", () => {
    test("Then it should return a copy of the initial state", () => {
      const unknownAction = {
        type: "prediction/unknownAction",
      };

      const newPredictionState = predictionReducer(
        mockPredictionInitialState,
        unknownAction
      );

      expect(newPredictionState).toStrictEqual(mockPredictionInitialState);
    });
  });

  describe("When it is invoked with getPrediction", () => {
    test("Then it should receive a specific weather forecast", () => {
      const action = getPredictionActionCreator(mockPrediction);
      const expectedState: PredictionState = {
        prediction: mockPrediction,
      };

      const newState = predictionReducer(mockPredictionInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
