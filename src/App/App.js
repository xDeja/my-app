import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      Hello World
      <Button
        variant="contained"
        style={{
          width: "100%",
          height: "30%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Just to be sure!
      </Button>
    </div>
  );
}

export default App;
