import "./App.css";
import { useWindowDimensions } from './useWindowDimensions';
import { Button } from "@material-ui/core";


const Component = () => {
  const {height, width} = useWindowDimensions();
}
function App() {
  return (
    <div>
      Hello World
      <Button
        variant="contained"
        style={{
          width: width/2,
          height: height/2,
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
