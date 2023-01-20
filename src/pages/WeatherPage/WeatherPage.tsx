import { useParams } from "react-router";
import { useEffect } from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import useWeather from "../../hooks/useWeather";
import { useAppSelector } from "../../redux/hooks";

const WeatherPage = (): JSX.Element => {
  const { loadCityWeather } = useWeather();
  const { city } = useParams();

  useEffect(() => {
    loadCityWeather(city!);
  }, [loadCityWeather, city]);

  const prediction = useAppSelector(({ prediction }) => prediction.prediction!);

  return <WeatherCard weather={prediction!} />;
};

export default WeatherPage;
