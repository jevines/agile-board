import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Task } from "../components/taskCard/TaskCard";
import TaskColumn from "../components/taskColumn/taskColumn";
import Modal from "react-modal";
import AddCard from "./addCard/addCard";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { moveTask, reorderTaskList } from "../utils/listUtils";
import { getTasks, updateTasks } from "../services/taskService/taskService";

const Wrapper = styled.section`
  background: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
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

const initListState = {
  todo: [],
  inProgress: [],
  qa: [],
  done: [],
};

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lists, setLists] = useState<{ [key: string]: Task[] }>(initListState);

  const onAddCardHandler = () => {
    setIsModalOpen(true);
  };

  const onSubmitCardHandler = (newTask: Task) => {
    setLists((state) => {
      state.todo.push(newTask);
      updateTasks(state);
      return JSON.parse(JSON.stringify(state));
    });
  };

  useEffect(() => {
    Modal.setAppElement("body");
    const tasksInStorage = getTasks();

    if (tasksInStorage) {
      setLists(tasksInStorage);
    }
  }, []);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorderTaskList(
        lists[destination.droppableId],
        source.index,
        destination.index
      );
      setLists((state) => {
        state[source.droppableId] = items;
        updateTasks(state);
        return JSON.parse(JSON.stringify(state));
      });
    } else {
      const { sourceList, destinationList } = moveTask(
        lists[source.droppableId],
        lists[destination.droppableId],
        source.index,
        destination.index
      );

      setLists((state) => {
        state[source.droppableId] = sourceList;
        state[destination.droppableId] = destinationList;
        updateTasks(state);
        return JSON.parse(JSON.stringify(state));
      });
    }
  };

  return (
    <Wrapper>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Card Modal"
        style={{
          content: {
            width: "20rem",
            top: "50%",
            left: "40%",
            right: "auto",
            bottom: "auto",
          },
        }}
      >
        <AddCard
          onSubmit={onSubmitCardHandler}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
      <AddCardButton data-testid="addCardButton" onClick={onAddCardHandler}>
        Click to add card
      </AddCardButton>
      <CollumnWapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <TaskColumn title="To Do" tasks={lists.todo} droppableId="todo" />
          <TaskColumn
            title="In Progress"
            tasks={lists.inProgress}
            droppableId="inProgress"
          />
          <TaskColumn title="QA" tasks={lists.qa} droppableId="qa" />
          <TaskColumn title="Done" tasks={lists.done} droppableId="done" />
        </DragDropContext>
      </CollumnWapper>
    </Wrapper>
  );
};

export default Dashboard;
