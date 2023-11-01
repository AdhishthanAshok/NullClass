import "./App.css";
import { HelloWorld, ByeWorld } from "./components/HelloWorld";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  console.log(counter);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Hello my name is Adhishthan</p>
      <HelloWorld text="Hello How are you!" />
      <ByeWorld />
      <button onClick={increment}>Click Me</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
