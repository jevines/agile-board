import React from "react";
import { render } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";

export const renderWithDragContext = (
  Component: React.ReactChild,
  onDragEndMock = jest.fn()
) => {
  return render(
    <DragDropContext onDragEnd={onDragEndMock}>{Component}</DragDropContext>
  );
};
