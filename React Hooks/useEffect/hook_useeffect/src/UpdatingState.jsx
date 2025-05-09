import React, { useEffect, useState } from 'react'

//to see how it works  in updating state
const UpdatingState = () => {
    const[count,setCount] = useState(10)
    useEffect(()=>{
        debugger
        console.log("inside useEffect")
    })
    const handleIncrement = () =>{
        setCount((prev)=>{
            return (prev+1)
        })
    }
  return (
    <div>
        <h1>useEffect Hook</h1>
        <h5>count{count}</h5>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default UpdatingState

//useEffect call back after mounting and after every updation it should execute

