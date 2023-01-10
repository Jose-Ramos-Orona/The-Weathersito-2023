import { PredictionState } from "../redux/features/predictionSlice/predictionSlice";
import { PredictionStructure } from "../redux/features/predictionSlice/types";

const mockPredictionInitialState: PredictionState = {
  prediction: {} as PredictionStructure,
};

export default mockPredictionInitialState;
