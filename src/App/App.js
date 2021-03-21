import "./App.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Stage, Layer, Star, Circle, Text } from "react-konva";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey, purple, green, red } from "@material-ui/core/colors/";
import useWindowSize from "../App/useWindowDimensions";

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    width : 10,
    height : 10,
    fill: 'red',
    isDragging: false
  }));
}

const INITIAL_STATE = generateShapes();

function App() {
  const [width, height] = useWindowSize();
  const [name, setName] = useState("Hello World");

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

  const [stars, setStars] = React.useState(INITIAL_STATE);

  const handleDragStart = e => {
    const id = e.target.id();
    setStars(
      stars.map(star => {
        return {
          ...star,
          isDragging: star.id === id
        };
      })
    );
  };
  const handleDragEnd = e => {
    setStars(
      stars.map(star => {
        return {
          ...star,
          isDragging: false
        };
      })
    );
  };

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Text text="Try to drag a star"
        />
        {stars.map(star => (
          <Circle
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            fill={"gray"}
            radius={20}
            opacity={0.8}
            stroke="red"
            draggable
            //rotation={star.rotation}
            shadowColor="blue"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            //scaleX={star.isDragging ? 1.2 : 1}
            //scaleY={star.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default App;
