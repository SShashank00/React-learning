import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './App.css'

function App() {

  let[counter, setCounter] = useState(0)



  // let counter =0
  const addValue = ()=>{
    console.log("Value Added",counter);
    counter = counter+1;
    setCounter(counter)
  }
  
  const removeValue=()=>{
    console.log("Value Added",counter);
    counter = counter-1;
    setCounter(counter)

  }


  return (
    <>
    <h1>React Project</h1>
    <h2>counter value : {counter}</h2>

    <button onClick={addValue}>+</button>
    <br />
    <button onClick={removeValue}>-</button>
    <p><footer>final Value of the counter is {counter}</footer></p> 
    </>

  )
}

export default App
