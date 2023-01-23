import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <h2 className="introduction">
        Please, choose a city to know its weather forecast.
      </h2>
    </HomePageStyled>
  );
};

export default HomePage;
