import { PredictionStructure } from "../redux/features/predictionSlice/types";

const initialState: PredictionStructure = {
  location: {
    name: "??",
    localtime: "??",
  },
  current: {
    temp_c: "??",
    condition: {
      text: "??",
      icon: "??",
    },
  },
};

export default initialState;
