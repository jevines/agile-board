import React from "react";
import { render } from "@testing-library/react";
import TaskColumn from "./taskColumn";

describe("The TaskColumn Component", () => {
  it("should match the snapshot", () => {
    const { container } = renderTaskColumn();

    expect(container.firstChild).toMatchSnapshot();
  });
});

const renderTaskColumn = () => {
  return render(<TaskColumn title="test title" />);
};
