import { render, screen } from "@testing-library/react";
import providerWrapper from "../../mocks/providerWrapper";
import HomePage from "./HomePage";

describe("Given a Home page", () => {
  describe("When its rendered,", () => {
    test("Then it should show a text 'Please, choose a city to know its weather forecast.'", () => {
      const text = "Please, choose a city to know its weather forecast.";

      render(<HomePage />, { wrapper: providerWrapper });

      const expectedText = screen.queryByRole("heading", {
        name: text,
        level: 2,
      });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
