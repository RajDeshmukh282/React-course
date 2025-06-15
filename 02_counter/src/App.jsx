import React from 'react'
import { useState } from 'react';
import './App.css'




function App() {
  const addvalue = () => {
  counter = counter +1;
  setCounter(counter);
  console.log("Counter value after increment: ", counter);  
}
function decrementvalue() {
  counter = counter - 1;
  setCounter(counter);
  console.log("Counter value after decrement: ", counter);
}
  // let counter  = 5;
let [counter , setCounter] = useState(5);

  return (
    <>
      <h1>React With Raj</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addvalue}>Increment  value</button>
      <br />
      <br />
      <button onClick={decrementvalue}>Decrement value</button>
    </>
  )
}

export default App
