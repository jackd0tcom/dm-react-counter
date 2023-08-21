  import {useState} from 'react'
  
  export default function Counter() {
  
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