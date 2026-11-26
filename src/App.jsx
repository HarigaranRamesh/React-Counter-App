import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="counter-card">
      <h1 className="title">Counter</h1>

      <div className="counter-display" aria-live="polite">
        {count}
      </div>

      <div className="button-group">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleDecrement}
          aria-label="Decrease count"
        >
          −
        </button>

        <button
          type="button"
          className="btn btn-outline"
          onClick={handleReset}
          aria-label="Reset count"
        >
          Reset
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
          aria-label="Increase count"
        >
          +
        </button>
      </div>
    </main>
  );
}

export default App;
