import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1
    setCounter(counter+ 1)
  }

  return (
    <>
     <h1>React Counter</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add {counter}</button>
     <br />
     <button>Remove {counter}</button>

     <p>footer: {counter}</p>
    </>
  )
}

export default App
