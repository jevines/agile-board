import { Task } from "../components/taskCard/TaskCard";

export const reorderTaskList = (
  list: Task[],
  startIndex: number,
  destinationIndex: number
) => {
  const reorderedList = Array.from(list);
  const [removed] = reorderedList.splice(startIndex, 1);
  reorderedList.splice(destinationIndex, 0, removed);

  return reorderedList;
};

export const moveTask = (
  source: Task[],
  destination: Task[],
  sourceIndex: number,
  destinationIndex: number
) => {
  const sourceList = Array.from(source);
  const destinationList = Array.from(destination);
  const [removed] = sourceList.splice(sourceIndex, 1);

  destinationList.splice(destinationIndex, 0, removed);

  return { sourceList, destinationList };
};
