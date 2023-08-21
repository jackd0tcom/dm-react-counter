import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from '/src/components/Counter'
import './App.css'


function App() {
  return(
  <>
  <Counter initialValue={0}/>
  <Counter initialValue={999}/>
  <Counter initialValue={-999}/>
  </>
)
}

export default App
