import "./App.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {grey, purple, green, red} from '@material-ui/core/colors/';
import useWindowSize from '../App/useWindowDimensions'

function App() {

  const [width, height] = useWindowSize();
  const [name, setName] = useState("Hello World");

  const changeName = () => {
    setName(name => "Hi, Alex!");
  };

  const theme = createMuiTheme({
    palette: {
       primary: ({
         main: grey[900]
       }),
       secondary: ({
         main: red[700]
       }),
       error: ({
         main: red[900]
       }),
    },
  });

  return (
    <box>
      <div
        style={{
          position: "absolute",
          bottom: height / 2 - 5,
          left: width / 2 - 8,
          color: "#ffffff",
        }}
      >
        {name}
      </div>
      <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color='primary'
        style={{
          position: "absolute",
          bottom: height/3,
          left: width/2,
        }}
        onClick={changeName}
      >
        Life is pain
      </Button>
      </ThemeProvider>
    </box>
  );
}

export default App;
