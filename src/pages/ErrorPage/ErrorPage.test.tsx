import { render, screen } from "@testing-library/react";
import providerWrapper from "../../mocks/providerWrapper";
import ErrorPage from "./ErrorPage";

describe("Given a Error page", () => {
  describe("When its rendered,", () => {
    test("Then it should show a text 'I'm sorry. There seems to be a problem with the information you are asking for. Try again please.'", () => {
      const text =
        "I'm sorry. There seems to be a problem with the information you are asking for. Try again please.";

      render(<ErrorPage />, { wrapper: providerWrapper });

      const expectedText = screen.queryByRole("heading", {
        name: text,
        level: 2,
      });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
