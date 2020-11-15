import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddCard from "./addCard";

const mockTitle = "A Mock Title";
const mockDescription = "A Mock description";
const mockComments = ["mock comment 1"];

const expectedTask = {
  id: expect.any(String),
  title: mockTitle,
  description: mockDescription,
  comments: mockComments,
};

describe("The AddCard screen", () => {
  let container: HTMLElement;
  let getByTestId: Function;

  beforeEach(() => {
    ({ container, getByTestId } = renderAddCard());
  });

  it("should match the snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("cliking the submit button", () => {
    beforeEach(() => {
      const titleInput = getByTestId("titleInput");
      fireEvent.change(titleInput, { target: { value: mockTitle } });

      const descriptionInput = getByTestId("descriptionInput");
      fireEvent.change(descriptionInput, {
        target: { value: mockDescription },
      });

      const commentsInput = getByTestId("commentsInput");
      fireEvent.change(commentsInput, { target: { value: mockComments[0] } });

      fireEvent.click(getByTestId("submitCardButton"));
    });

    it("should call the onSubmit callback with the enter data", () => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith(expectedTask);
    });
    it("should call the onClose callback", () => {
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });
});

const mockOnSubmit = jest.fn();
const mockOnClose = jest.fn();

const renderAddCard = () => {
  return render(<AddCard onSubmit={mockOnSubmit} onClose={mockOnClose} />);
};
