import React, { useState } from 'react';

function compute(){
    debugger
    console.log("inside compute")
    let sum=0;
    for(let i=0;i<=100;i++){
        sum+=i
    }
    return sum;
}
// const LazyInitialization = () => {
//     debugger
//     const[count,setcount] = useState(compute())
//     const increment=()=>{
//         setcount((count,()=>{
//             return count+1
//         }))
//     }
//   return (
//     <div>
//       <h1>Lazy initalization example</h1>
//       <h4>COunt: {count}</h4>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// export default LazyInitialization


/**
  we are setting initial state of count is compute function it is a sum of first 100 numbers
  first time only (when we click the button the 1st re-render then initial value executes means compute function executes)
  from 2nd render no need to execute the initial vavlue
  but here what happens again it is calling compute function 
  unnencesarly calling compute() so performance effect 
  so react introduce for this callback function -> this callback function renders only one time at first render
  instead of passing compute() in useState pass like this compute
 */

  const LazyInitialization = () => {
    debugger
    const[count,setcount] = useState(compute)
    const increment=()=>{
        setcount((count,()=>{
            return count+1
        }))
    }
  return (
    <div>
      <h1>Lazy initalization example</h1>
      <h4>COunt: {count}</h4>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default LazyInitialization

//from 2nd render no need to execute again compute() funtion
//this process is called lazy initalization
//improves performance
