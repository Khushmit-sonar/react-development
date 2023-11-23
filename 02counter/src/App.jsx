import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]= useState(0)

  //const [counter, setCounter] = useState(0)
  //let counter = 0

  const addValue =()=>{
    //counter = counter + 1;
    setCounter(counter + 1)
  }

  const subValue =() =>{
    //counter = counter - 1 ;
    if(counter == 0){
      setCounter(counter == 0)
    }else{
      setCounter(counter -1)
    }
   
  }


  return (
    <>
      
      <h1>Khushmit's counter</h1>
      <h2>Counter value: {counter}</h2>
        <button onClick={addValue}> Add value</button>
        <br />
        <br />
        <button onClick={subValue}>Remove value</button>
    </>
  )
}

export default App
