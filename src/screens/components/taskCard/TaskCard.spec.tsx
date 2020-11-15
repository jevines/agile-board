import React from "react";
import { render } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("The TaskCard Component", () => {
  it("should match the snapshot", () => {
    const { container } = renderTaskCard();

    expect(container.firstChild).toMatchSnapshot();
  });
});

const mockTask = {
  title: "mock task title",
  description: "A mock description",
  comments: ["comment 1", "comment 2"],
};

const renderTaskCard = () => {
  return render(<TaskCard task={mockTask} />);
};
