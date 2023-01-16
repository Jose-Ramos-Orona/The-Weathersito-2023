import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockPrediction from "../../mocks/mockPrediction";
import WeatherCard from "./WeatherCard";

describe("Given a WeatherCard component", () => {
  describe("When its rendered", () => {
    const prediction = mockPrediction;

    test("Then it should show the name of the city you have searched", () => {
      const cityName = "Reus";

      render(
        <BrowserRouter>
          <WeatherCard weather={prediction} />
        </BrowserRouter>
      );
      const expectedName = screen.queryByRole("heading", {
        name: cityName,
        level: 2,
      });

      expect(expectedName).toBeInTheDocument();
    });

    test("Then it should show an image representing the weather forecast", () => {
      render(
        <BrowserRouter>
          <WeatherCard weather={prediction} />
        </BrowserRouter>
      );
      const expectedImage = screen.queryByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
