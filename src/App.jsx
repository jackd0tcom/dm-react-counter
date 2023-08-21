import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function incrementCount (){
    setCount(count + 1)
  };

  function decreaseCount(){
    setCount(count - 1)
  }

  return ( 
  <>
  <h1>{count}</h1>  
  <button
    type='button'
    onClick={incrementCount}
  >
    click me to increase count
  </button>
  <button
    type='button'
    onClick={decreaseCount}
  >
    click me to decrease count
  </button>
  </>
)
}

export default App
