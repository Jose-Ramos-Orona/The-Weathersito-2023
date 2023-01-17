import { useState, FormEvent } from "react";
import useWeather from "../../hooks/useWeather";
import Button from "../Button/Button";
import SearchBarStyled from "./SearchBarStyled";

const SearchBar = (): JSX.Element => {
  const { loadCityWeather } = useWeather();
  const [cityName, setCityName] = useState("");
  const citySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loadCityWeather(cityName);
  };

  return (
    <SearchBarStyled>
      <form
        data-testid="form"
        className="search"
        onSubmit={(event) => {
          citySubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Ex: Reus..."
          className="search__bar"
          required
          autoComplete="off"
          onChange={(event) => {
            setCityName(event.target.value);
          }}
        ></input>
        <Button
          text="SEARCH"
          ariaLabel="Click to search"
          className="search__button"
        />
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;
