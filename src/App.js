import logo from "./logo.svg";
import "./App.css";
import useSound from "use-sound";
import door from "./audio/drzwi.m4a";
import { useEffect, useState } from "react";
import Beeper from "./Beeper";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      setCount(2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Beeper counter={count} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
