import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered with the text 'SEARCH'", () => {
    test("Then it should show a button with the same text on it", () => {
      const textButton = "SEARCH";
      const classNameButton = "button";

      render(<Button className={classNameButton} text={textButton} />);
      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(textButton);
    });
  });

  describe("When its receives an action", () => {
    test("Then it should call an action on click", async () => {
      const buttonAction = jest.fn();

      render(<Button className="" text="" action={buttonAction} />);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
