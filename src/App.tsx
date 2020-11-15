import React from "react";
import Dashboard from "./screens/dashboard";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height:100%;
    font-family: "Courier New";
  }
  html {
    height: 100%;
  }
  #root, #root > div {
    height: 100%;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Dashboard />
    </div>
  );
}

export default App;
