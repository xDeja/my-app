import "./App.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import useWindowSize from '../App/useWindowDimensions'




function App() {
  const [width, height] = useWindowSize();
  const [name, setName] = useState("Hello World");

  const changeName = () => {
    setName("Hi, Alex!");
  };
  return (
    <box>
      <div
        style={{
          position: "absolute",
          bottom: height / 2 - 5,
          left: width / 2 - 10
        }}
      >
        {name}
      </div>
      <Button
        variant="contained"
        style={{
          position: "absolute",
          color: "#000",
          bottom: height / 1.5,
          left: width / 2
        }}
        onClick={changeName}
      >
        uh
      </Button>
    </box>
  );
}

export default App;
