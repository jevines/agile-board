import React from "react";
import styled from "styled-components";
import TaskColumn from "./components/taskColumn/taskColumn";

const Wrapper = styled.section`
  background: black;
  display: flex;
  height: 100vh;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <TaskColumn title="To Do" />
      <TaskColumn title="In Progress" />
      <TaskColumn title="QA" />
      <TaskColumn title="Done" />
    </Wrapper>
  );
};

export default Dashboard;
