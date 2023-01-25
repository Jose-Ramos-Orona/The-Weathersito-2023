import { render, screen } from "@testing-library/react";
import providerWrapper from "../../mocks/providerWrapper";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a Loader component with aria label text 'an image with a sun and a cloud raining'", () => {
      const expectedText = "an image with a sun and a cloud raining";

      render(<Loader />, { wrapper: providerWrapper });

      const loader = screen.queryByLabelText(expectedText);

      expect(loader).toBeInTheDocument();
    });
  });
});
