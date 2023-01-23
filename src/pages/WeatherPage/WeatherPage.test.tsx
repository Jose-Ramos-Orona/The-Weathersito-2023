import { render, screen } from "@testing-library/react";
import providerWrapper from "../../mocks/providerWrapper";
import WeatherPage from "./WeatherPage";

describe("Given a WeatherPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a Weather card", () => {
      render(<WeatherPage />, { wrapper: providerWrapper });

      const card = screen.queryByRole("article");

      expect(card).toBeInTheDocument();
    });
  });
});
