import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <Counter />
    </div>
  );
}


function Counter() {

  // state of count for count and set step count
  const [step, setStep] = useState(1)

  // state for count and
  const [count, setCount] = useState(0);

  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);


  return (

    <div >
      <div >
        <button onClick={() => setStep((c) => c - 1)} >-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)} >+</button>
      </div>

      <div >
        <button onClick={() => setCount((c) => c - step)} >-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)} >+</button>
      </div>


      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago was `}</span>
        <span> {date.toDateString()} </span>
      </p>

    </div>

  )
}