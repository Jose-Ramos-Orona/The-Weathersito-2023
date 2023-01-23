import { PredictionStructure } from "../../redux/features/predictionSlice/types";
import WeatherCardStyled from "./WeatherCardStyled";

interface WeatherProps {
  weather: PredictionStructure;
}

const WeatherCard = ({ weather }: WeatherProps): JSX.Element => {
  const {
    current: {
      temp_c,
      condition: { icon, text },
    },
    location: { localtime, name },
  } = weather;

  return (
    <WeatherCardStyled className="weather-container">
      <div className="weather-container__temperature">
        <h2>{temp_c}ºC</h2>
      </div>
      <div className="weather-container__current">
        <h2 className="weather-container__city">{name}</h2>
        <p>{localtime}h</p>
        <div className="weather-container__representation">
          <img width={125} height={100} src={icon} alt="Weather icon" />
          <p className="weather-container__information">{text}</p>
        </div>
      </div>
    </WeatherCardStyled>
  );
};

export default WeatherCard;
