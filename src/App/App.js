import "./App.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Stage, Layer, Rect, Circle } from "react-konva";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey, purple, green, red } from "@material-ui/core/colors/";
import useWindowSize from "../App/useWindowDimensions";

function App() {
  const [width, height] = useWindowSize();
  const [name, setName] = useState("Hello World");

  const changeName = () => {
    setName("Hi, Alex!");
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: grey[900]
      },
      secondary: {
        main: red[700]
      },
      error: {
        main: red[900]
      }
    }
  });

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={50} height={50} fill="red" />
        <Circle x={200} y={200} stroke="black" radius={50} />
      </Layer>
    </Stage>
  );
}

export default App;
