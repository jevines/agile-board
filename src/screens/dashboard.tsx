import React, { useState } from "react";
import styled from "styled-components";
import { Task } from "./components/taskCard/TaskCard";
import TaskColumn from "./components/taskColumn/taskColumn";

const Wrapper = styled.section`
  background: black;
  display: flex;
  height: 100vh;
`;

const taskPlaceHolder = {
  title: "mock task title",
  description: "A mock description",
  comments: ["comment 1", "comment 2"],
};

const Dashboard = () => {
  const [todoTasks, setTodoTasks] = useState<Task[]>([taskPlaceHolder]);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([
    taskPlaceHolder,
  ]);
  const [qaTasks, setQATasks] = useState<Task[]>([taskPlaceHolder]);
  const [DoneTasks, setDoneTasks] = useState<Task[]>([taskPlaceHolder]);

  return (
    <Wrapper>
      <TaskColumn title="To Do" tasks={todoTasks} />
      <TaskColumn title="In Progress" tasks={inProgressTasks} />
      <TaskColumn title="QA" tasks={qaTasks} />
      <TaskColumn title="Done" tasks={DoneTasks} />
    </Wrapper>
  );
};

export default Dashboard;
