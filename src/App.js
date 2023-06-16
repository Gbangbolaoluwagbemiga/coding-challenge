import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const styles = {
    display: "inline",
    margin: "0px 8px",
    fontSize: "1.5rem",
    cursor: "pointer"
  };

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // count implementation
  function addCount() {
    setCount((s) => (step !== 0 ? s + step : s + 1));
  }
  function subCount() {
    setCount((s) => (step !== 0 ? s - step : s - 1));
  }
  // step implementation
  function subStep() {
    setStep((s) => s - 1);
  }
  function addStep() {
    setStep((s) => s + 1);
  }
  return (
    <>
      <div style={{ margin: "1.5rem 0" }}>
        <button style={styles} onClick={subStep}>
          -
        </button>
        <p style={{ display: "inline" }}>Step: {step}</p>
        <button style={styles} onClick={addStep}>
          +
        </button>
      </div>

      <div style={{ margin: "1.5rem 0" }}>
        <button style={styles} onClick={subCount}>
          -
        </button>
        <p style={{ display: "inline" }}>count: {count}</p>
        <button style={styles} onClick={addCount}>
          +
        </button>
      </div>

      <p>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} ${count === 1 ? "day" : "days"} from today is`
          : `${Math.abs(count)} days ago was`}{" "}
        {date.toDateString()}
      </p>
    </>
  );
}
