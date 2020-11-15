import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Dashboard from "./dashboard";

describe("The Dashboard Component", () => {
  let container: HTMLElement;
  let getByTestId: Function;
  let queryByTestId: Function;

  beforeEach(() => {
    ({ container, getByTestId, queryByTestId } = renderDashboard());
  });
  it("should match the snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("clicking the add card button", () => {
    beforeEach(() => {
      const addCardButton = getByTestId("addCardButton");

      fireEvent.click(addCardButton);
    });
    it("should render the addCardComponent", () => {
      expect(queryByTestId("addCardScreen")).toBeTruthy();
    });
  });
});

const renderDashboard = () => {
  return render(<Dashboard />);
};
