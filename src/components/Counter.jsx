  import {useState} from 'react'
  import './Counter.css'



  export default function Counter(prop) {
  
    const [count, setCount] = useState(prop.initialValue);

  function incrementCount (){
    setCount(count + 1)
  };

  function decreaseCount(){
    setCount(count - 1)
  }

  function resetCount(){
    setCount(prop.initialValue)
  }

    return ( 
  <div className='counter'>
  <h1>{count}</h1>  
  <button
    type='button'
    onClick={incrementCount}
  >
    click me to increase count
  </button>
    <button
    type='button'
    onClick={resetCount}
  >
    click me to reset count
  </button>
  <button
    type='button'
    onClick={decreaseCount}
  >
    click me to decrease count
  </button>
    </div>
)
}