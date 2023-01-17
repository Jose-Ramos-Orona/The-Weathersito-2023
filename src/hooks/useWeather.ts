import { useCallback } from "react";
import { getPredictionActionCreator } from "../redux/features/predictionSlice/predictionSlice";
import { PredictionStructure } from "../redux/features/predictionSlice/types";
import { useAppDispatch } from "../redux/hooks";

const useWeather = () => {
  const apiUrl = process.env.REACT_APP_URLAPI;
  const userKey = process.env.REACT_APP_KEY;
  const dispatch = useAppDispatch();

  const loadCityWeather = useCallback(
    async (city: string) => {
      try {
        const response = await fetch(`${apiUrl}key=${userKey}&q=${city}`);

        const prediction = (await response.json()) as PredictionStructure;
        dispatch(getPredictionActionCreator(prediction));
      } catch (error: unknown) {}
    },
    [dispatch, apiUrl, userKey]
  );
  return { loadCityWeather };
};

export default useWeather;
