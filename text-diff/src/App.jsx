import React from "react";
import Sidebar from "./Sidebar";
import TextCompare from "./TextCompare";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <TextCompare />
      </div>
    </div>
  );
}

export default App;
