import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Block from "./components/block/block";
import Sidebar from "./components/SideBar/side_bar";
function App() {
  const [content, setContent] = useState<string>("Drop Something here");

  // triggered when dragging
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ) => {
    event.dataTransfer.setData("text", data);
  };

  // triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    setContent(data);
  };

  // droppable area
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Block text="Test" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Sidebar></Sidebar>
      <div className="container">
        <div
          className="box"
          onDragStart={(event) => dragStartHandler(event, "This is a block")}
          draggable={true}
        >
          <h2>This is a block</h2>
        </div>
        <div className="box" onDragOver={allowDrop} onDrop={dropHandler}>
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
