import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(15);
  
  const addValue=()=>{
    if(count==20){
      return;
    }
    setCount(prevcount=>prevcount+1);
  };

  const removeValue=()=>{
    if(count==0){
      return;
    }
    setCount(count=>count-1);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter Value : {count}</h2>

      <button onClick={addValue}>Add Value {count}</button>
      <br />
      <button onClick={removeValue}>remove Value {count}</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe iste asperiores voluptatem harum quaerat accusamus reiciendis facilis quo quos? {count}</p>
    </>
  )
}

export default App
