import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeather from "../../hooks/useWeather";
import Button from "../Button/Button";
import SearchBarStyled from "../SearchBar/SearchBarStyled";

interface IFormInput {
  city: string;
}

const SearchBar = (): JSX.Element => {
  const { loadCityWeather } = useWeather();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [cityName, setCityName] = useState("");
  const citySubmit = () => {
    loadCityWeather(cityName);
  };

  return (
    <SearchBarStyled>
      <form
        data-testid="form"
        className="search"
        onSubmit={handleSubmit(citySubmit)}
      >
        <div className="search-container">
          <input
            type="text"
            placeholder="Ex: Reus..."
            className="search-container__bar"
            autoComplete="off"
            {...register("city", { required: true })}
            onChange={(event) => {
              setCityName(event.target.value);
            }}
          ></input>
          <Button
            text="SEARCH"
            ariaLabel="Click to search"
            className="search-container__button"
          />
        </div>
        {errors.city && (
          <small className="search__error-message">City name is required</small>
        )}
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;
