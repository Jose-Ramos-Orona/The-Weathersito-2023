import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import providerWrapper from "../../mocks/providerWrapper";
import userEvent from "@testing-library/user-event";

const mockSearchAction = jest.fn();

jest.mock("../../hooks/useWeather", () => {
  return () => ({
    loadCityWeather: mockSearchAction,
  });
});

describe("Given a SearchBar component", () => {
  describe("When its rendered", () => {
    test("Then it should show a input and a button", () => {
      render(<SearchBar />, { wrapper: providerWrapper });

      const expectedInput = screen.queryByRole("textbox");
      const expectedButton = screen.queryByRole("button");

      expect(expectedInput).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When its button 'SEARCH' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const cityName = "Reus";
      const placeholderText = "Ex: Reus...";

      render(<SearchBar />, { wrapper: providerWrapper });

      const searchInput = screen.queryByPlaceholderText(placeholderText)!;
      await userEvent.type(searchInput, cityName);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockSearchAction).toHaveBeenCalled();
    });
  });
});
