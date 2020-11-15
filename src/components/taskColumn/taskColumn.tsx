import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TaskCard, { Task } from "../taskCard/TaskCard";

const Wrapper = styled.section`
  margin: 2rem;
  padding: 2rem 0 2rem 0;
  width: 50rem;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

interface TaskColumnProps {
  droppableId: string;
  title: string;
  tasks: Task[];
}
const TaskColumn = ({ title, tasks, droppableId }: TaskColumnProps) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <Wrapper ref={provided.innerRef}>
          <Title>{title}</Title>
          {tasks.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={task.id.toString()}
              index={index}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard key={`taskCard-${index}`} task={task} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default TaskColumn;
