import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a title with the text 'The Weathersit", () => {
      const text = "The Weathersit";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const title = screen.queryByRole("heading", { name: text, level: 1 });

      expect(title).toBeInTheDocument();
    });
  });
});
