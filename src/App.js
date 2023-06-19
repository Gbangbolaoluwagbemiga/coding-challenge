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
    margin: "0px 5px",
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  const [count, setCount] = useState("");
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
  function handleClick() {
    setCount("");
    setStep(0);
  }

  return (
    <>
      <div style={{ margin: "1.5rem 0" }}>
        <input
          type="range"
          min={1}
          max={20}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <p style={{ display: "inline" }}>{step}</p>
      </div>

      <div style={{ margin: "1.5rem 0" }}>
        <button style={styles} onClick={subCount}>
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button style={styles} onClick={addCount}>
          +
        </button>
      </div>

      <p>
        {count === ""
          ? "Today is"
          : count > 0
          ? `${count} ${count === 1 ? "day" : "days"} from today is`
          : `${Math.abs(count)} days ago was`}{" "}
        {date.toDateString()}
      </p>
      {count !== "" || step !== 0 ? (
        <button onClick={handleClick}>Reset</button>
      ) : (
        ""
      )}
    </>
  );
}
