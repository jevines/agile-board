import React from "react";
import styled from "styled-components";
import TaskCard, { Task } from "../taskCard/TaskCard";

const Wrapper = styled.section`
  margin: 2rem;
  width: 50rem;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24;
  text-align: center;
`;

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}
const TaskColumn = ({ title, tasks }: TaskColumnProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {tasks.map((task, index) => {
        return <TaskCard key={`taskCard-${index}`} task={task} />;
      })}
    </Wrapper>
  );
};

export default TaskColumn;
