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

  function incStep() {
    setSteps((s) => s + 1);
  }
  function dicStep() {
    setSteps((s) => s - 1);
  }
  function incCount() {
    setCounts((c) => c + steps);
  }
  function dicCount() {
    setCounts((c) => c - steps);
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
        <input className="input"
          type="text"
          value={counts}
          onChange={(e) => setCounts(Number(e.target.value))}
        />
        <button onClick={incCount}>+</button>
      </div>
      <div className="text">
        <span>
          {counts === 0
            ? "Today is "
            : counts > 0
            ? `${counts} days from today is `
            : `${Math.abs(counts)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
