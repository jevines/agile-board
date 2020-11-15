import React from "react";
import styled from "styled-components";
import TaskCard from "../taskCard/TaskCard";

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
}
const TaskColumn = ({ title }: TaskColumnProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TaskCard
        task={{
          title: "mock task title",
          description: "A mock description",
          comments: ["comment 1", "comment 2"],
        }}
      />
    </Wrapper>
  );
};

export default TaskColumn;
