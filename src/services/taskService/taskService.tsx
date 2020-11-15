import { Task } from "../../components/taskCard/TaskCard";

export const updateTasks = (listState: { [key: string]: Task[] }) => {
  localStorage.setItem("taskState", JSON.stringify(listState));
};

export const getTasks = () => {
  const tasksInStorage = localStorage.getItem("taskState");
  return tasksInStorage && JSON.parse(tasksInStorage);
};
