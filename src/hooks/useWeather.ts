import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { getPredictionActionCreator } from "../redux/features/predictionSlice/predictionSlice";
import { useAppDispatch } from "../redux/hooks";

const useWeather = () => {
  const apiUrl = process.env.REACT_APP_URLAPI;
  const userKey = process.env.REACT_APP_KEY;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loadCityWeather = useCallback(
    async (city: string) => {
      try {
        const response = await axios.get(`${apiUrl}key=${userKey}&q=${city}`);

        const prediction = response.data;

        dispatch(getPredictionActionCreator(prediction));
        navigate(`/weather/${prediction.location.name}`);
      } catch (error: unknown) {
        navigate("/error");
      }
    },
    [dispatch, apiUrl, userKey, navigate]
  );
  return { loadCityWeather };
};

export default useWeather;
