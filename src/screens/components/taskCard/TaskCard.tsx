import React from "react";
import styled from "styled-components";

export interface Task {
  title: string;
  description: string;
  comments: string[];
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.5rem;
  margin: 0 2rem 0 2rem;
`;
const TaskTitle = styled.h2`
  font-size: 20;
  color: black;
  text-align: left;
`;
const TaskDescription = styled.p`
  font-size: 16;
  color: black;
  text-align: left;
`;
const TaskComment = styled.p`
  font-size: 14;
  color: black;
  text-align: left;
`;

interface TaskFileProps {
  task: Task;
}

const TaskCard = ({ task }: TaskFileProps) => {
  return (
    <Wrapper>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
      {task.comments.map((comment, index) => {
        return <TaskComment key={index}>{comment}</TaskComment>;
      })}
    </Wrapper>
  );
};

export default TaskCard;
