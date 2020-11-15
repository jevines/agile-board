import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./dashboard";

describe("The Dashboard Component", () => {
  it("should match the snapshot", () => {
    const { container } = renderDashboard();
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("clicking the add card button", () => {});
});

const renderDashboard = () => {
  return render(<Dashboard />);
};
