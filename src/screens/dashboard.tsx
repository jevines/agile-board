import React, { useState } from "react";
import styled from "styled-components";
import { Task } from "./components/taskCard/TaskCard";
import TaskColumn from "./components/taskColumn/taskColumn";

const Wrapper = styled.section`
  background: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CollumnWapper = styled.section`
  display: flex;
  flex-direction: row;
`;

const AddCardButton = styled.button`
  height: 5rem;
  background-color: white;
  color: black;
  width: 15rem;
  margin: 2rem;
`;

const taskPlaceHolder = {
  id: 1235,
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

  const onAddCardHandler = () => {
    console.log("clicked");
  };

  return (
    <Wrapper>
      <AddCardButton data-testid="addCardButton" onClick={onAddCardHandler}>
        Click to add card
      </AddCardButton>
      <CollumnWapper>
        <TaskColumn title="To Do" tasks={todoTasks} />
        <TaskColumn title="In Progress" tasks={inProgressTasks} />
        <TaskColumn title="QA" tasks={qaTasks} />
        <TaskColumn title="Done" tasks={DoneTasks} />
      </CollumnWapper>
    </Wrapper>
  );
};

export default Dashboard;
