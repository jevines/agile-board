import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./dashboard";

describe("The Dashboard Component", () => {
  it("should match the snapshot", () => {
    const { container } = renderDashboard();
    expect(container.firstChild).toMatchSnapshot();
  });
});

const renderDashboard = () => {
  return render(<Dashboard />);
};
