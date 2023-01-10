import { PredictionStructure } from "../redux/features/predictionSlice/types";

const mockPrediction: PredictionStructure = {
  location: {
    name: "Reus",
    localtime: "2023-01-10 12:09",
  },
  current: {
    temp_c: 15.0,
    condition: {
      text: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    },
  },
};

export default mockPrediction;
