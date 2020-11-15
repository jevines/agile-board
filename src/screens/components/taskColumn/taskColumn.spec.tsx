import React from "react";
import { render } from "@testing-library/react";
import TaskColumn from "./taskColumn";
import { mockTask } from "../taskCard/TaskCard.spec";

describe("The TaskColumn Component", () => {
  it("should match the snapshot", () => {
    const { container } = renderTaskColumn();

    expect(container.firstChild).toMatchSnapshot();
  });
});

const renderTaskColumn = () => {
  return render(<TaskColumn title="test title" tasks={[mockTask]} />);
};
