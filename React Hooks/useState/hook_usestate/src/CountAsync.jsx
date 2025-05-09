
// const CountAsync = () => {
//     const [count, setCount] = useState(10);
//     const increment = () => {
//         setCount(count + 1);
//         setCount(count + 4);
//         setCount(count + 3)
//         setCount(count + 2)
//         console.log(count)
//     }
//     return (
//         <div>
//             <h1>Aysnc nature of setState with an example of counter</h1>
//             <h2>Count : {count}</h2>
//             <button onClick={increment}>Increment</button>
//         </div>
//     )
// }

import { useState } from "react";

// export default CountAsync






// if any updation happens in component react doesn't do immediate updation / re-render
// first it will schedule after some time then it re-render and update
// how it works 
// initial render - 10 setCount(count+1) => 10 + 1 
// react stores that update value in a queue in background
// queue[11,14,13,12]
// again  we are calling setCount(count+4)...here we are updating count value from 10 to 11 it is updated but not called bcz again we 3 lines of code 
// setCount(count+4) , setCOunt(count+3) and setCount(count+2)
// after finishing function these lines then only it should re-render
// setCount(count+4) => count value is 10 (10+4 = 14)
// setCount(count+3) => count value is 10 (10+3 = 13)
// setCount(count+2) => count value is 10 (10+2 = 12) --> after these lines of code call stack is free

/**
for 1st render means for the first time when we click button - these steps are follows
counter(count = 10)
first it will check any update queue is there regarding counter component
queue follows fifo -> counter(count = 10)  is changed counter(count = 11) -> queue[11,14,13,12]
counter(count = 11) changed to counter(count = 14) ->queue[14,13,12]
counter(count = 14) changed to counter(counter = 13) -> queue[13,12]
counter(count = 12)  chnaged to counter(count = 12) ->queue[12]
queue[]
 */

/**
  for2nd render - 2nd time we are clicking button now counter value is
  now counter(count=12)
  queue[]
  setCount(count+1); (12+1) => 13 =>queue[13]
  setCount(count+4); (12+4) => 16 =>queue[13,16]
  setCount(count+3)  (12+3) => 15 =>queue[13,16,15]
  setCount(count+2)  (12+2) => 14 =>queue[13,16,15,14]
  queue follows fifo  => first it changes 12 to 13 now in queue [16,15,14]
                         13 to 16 => queue[15,14]
                         16 to 15 => queue[14]
                         15 to 14 => queue[]

like this it happens that pending executes
*/

//these queue pending updates finished by useState() hook


//here cascading updates are not happening means immediate updation is not happening . 
//so in react they have implemented another function or signuatre for setter or setState 
//it takes new value and callback function
//setState(newvalue,callback function)
//callback function how it works =>it takes previous value as an argument and return next value callback(prev) =>nextValue
//setState(callbackFn => (prevValue) => nextValue)
//setCount((prev)=> { return (prev+3)})




const CountAsync = () => {
    const [count, setCount] = useState(10);
    const increment = () => {
        setCount(count+1)
        setCount((prev) => {
            return (prev+3)
        })
        console.log(count)
    }
    return (
        <div>
            <h1>Aysnc nature of setState with an example of counter</h1>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default CountAsync

/**
   1st time render -> count =10
   setCOunt+1 => (10+1=11) => setCount(11)
   setCount((prev) => {
            return (prev+3)
        })
  this expression we called as a function f1
  in queue [11 , f1 ] => it schudles re-render 
  1st updation = 10 to 11
  2nd updation = is a function it will invoke means currentstate value pass to f1 => 11 + 3 = 14
  that will be udpate state = 14

  for second rednder ->

   setCOunt+1 => (14+1=15) => setCount(15)
   setCount((prev) => {
            return (prev+3)
        })
  this expression we called as a function f1
  in queue [15 , f1 ] => it schudles re-render 
  1st updation = 14 to 15
  2nd updation = is a function it will invoke means currentstate value pass to f1 => 15 + 3 = 18
  that will be udpate state = 18
 */

  //why we are calling async nature means it is not re-rendering after updation all code in a function executes then only it is re-rendering .
  