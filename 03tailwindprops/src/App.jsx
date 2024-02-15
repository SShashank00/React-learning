import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myboj={
    username: "shashank",
    age:21
  }
  let newArr =[2,3,4,5]


  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Clsses</h1>
    <Card username="ReactLearning" btntext="Visit me "/>
    <Card username="DataScience" btntext="Click me "/>
    </>
  )
}

export default App
