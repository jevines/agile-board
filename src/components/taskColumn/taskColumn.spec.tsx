import React from "react";
import TaskColumn from "./taskColumn";
import { mockTask } from "../taskCard/TaskCard.spec";
import { renderWithDragContext } from "../../screens/utils/testUtils";

describe("The TaskColumn Component", () => {
  it("should match the snapshot", () => {
    const { container } = renderTaskColumn();

    expect(container.firstChild).toMatchSnapshot();
  });
});

const renderTaskColumn = () => {
  return renderWithDragContext(
    <TaskColumn title="test title" tasks={[mockTask]} droppableId="testId" />
  );
};
