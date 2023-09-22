import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [setDisabled, setSetDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="minus-button"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid="on/off-button"
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
