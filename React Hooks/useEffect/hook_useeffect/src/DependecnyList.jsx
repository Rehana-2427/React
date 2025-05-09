import React, { useEffect, useState } from 'react'

//dependecny list and its usage
//dependency list -> array data structure 
/**
 useEffect(()=>{
        debugger
        console.log("inside useEffect")
    },[])
 */
//we can use multiple useEffect in a functional component
const DependecnyList = () => {
    const[count,setCount] = useState(10)
    const[age,setAge] = useState(23)
    //dependecncy list is empty
    useEffect(()=>{
        console.log("inside useEffect")
    },[])
    useEffect(()=>{
        
        console.log("count changed ")
    },[count])
    useEffect(()=>{
        
        console.log("age changed")
    },[age])
    useEffect(()=>{
        debugger
        console.log("age or count changed")
    },[age,count])
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
        <h5>Age: {age}</h5> 
        <button onClick={()=>setAge(age+1)}>Update</button>
    </div>
  )
}


export default DependecnyList


//first render means when ui is mounting on the screen ( when count = 10 , age =23 )
//in console inside sideEffect , count is change , age is changed , age or count changd
//2nd render -> when i click on increment button (now count is changed 10 to 11)
//in console -> count is changed , age or count is changed 
//2nd render -> for age when i click on update (now age 23 to 24)
//in console -> age is changed , age or count changed

//these side effects execute after updating the ui
//it compares prev render not with first render

//using useEffect - whatever to conditional rendering we can execute. 