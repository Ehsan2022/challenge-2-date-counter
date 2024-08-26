import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Date Counter</h1>
      <p>Update count to find date</p>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [counts, setCounts] = useState(0);

  function incCount() {
    setCounts((c) => c + steps);
  }
  function dicCount() {
    setCounts((c) => c - steps);
  }
  function handleReset() {
    setCounts(0);
    setSteps(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + counts);

  return (
    <>
      <div>
        <span>Step: </span>
        <input
          type="range"
          min={1}
          max={10}
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        <span> {steps}</span>
      </div>
      <div>
        <button onClick={dicCount}>-</button>
        <input
          className="input"
          type="text"
          value={counts}
          onChange={(e) => setCounts(Number(e.target.value))}
        />
        <button onClick={incCount}>+</button>
      </div>
      <div className="text">
        <p>
          {counts === 0
            ? "Today is "
            : counts > 0
            ? `${counts} days from today is `
            : `${Math.abs(counts)} days ago was `}
        </p>
        <span>{date.toDateString()}</span>
      </div>
      {steps !== 1 || counts !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
