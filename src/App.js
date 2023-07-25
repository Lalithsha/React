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
  const [stepCount, setStepCount] = useState(1);
  // state for count and
  const [count, setCount] = useState(1);

  function handlePreviousStep() {
    setStepCount((s) => s - 1)
  }

  function handleNextStep() {
    setStepCount((s) => s + 1)
  }

  function handlePreviousCount() {
    setCount((coun) => coun - stepCount)
  }

  function handleNextCount() {
    setCount((coun) => coun + stepCount)
  }

  function setDate() {

    // Logic to get date days and month 
    let date = new Date();
    date.setDate(date.getDate() + count); // Add the number of 'count' days to the current day
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let currentDay = days[date.getDay()];
    let currentMonth = months[date.getMonth()];
    let currentDate = date.getDate();
    let currentYear = date.getFullYear();

    let formatDate = currentDay + ', ' + currentMonth + ' ' + (currentDate) + ', ' + currentYear;

    return formatDate;
  }

  setDate();

  return (
    <>
      <div className="step">

        <button onClick={handlePreviousStep} > - </button>
        <span >Step: {stepCount} </span>
        <button onClick={handleNextStep} > + </button>
      </div>

      <div className="count">
        <button onClick={handlePreviousCount} > - </button>
        <span >Count: {count}</span>
        <button onClick={handleNextCount}> + </button>
      </div>

      <span> {count} days from {setDate()}</span>

    </>

  )
}