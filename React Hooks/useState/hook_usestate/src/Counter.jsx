import React, { useState } from 'react';

const Counter = () => {
  //primitive data type
  const [count, setCount] = useState(0)
  const increment = () => {
    debugger
    setCount(count + 1)
    console.log(count)//in memory it is updating but not in ui bcz we didn't call counter component after updating  it is in async nature update in ui but in memory or console 

  }
  //for non primitive data types how useState works - (object like that)
  const [user, setUser] = useState({ name: "Rehana", age: 23 })
  //user is point to heap memopry refernece - example hashvalue = 500 
  //when we click button whatever data in 500 hashvalue it should print. i.e. { name: "Rehana", age: 23 } 
  const incrementAge = () => {
    // console.log("before update", user.age) //old value in console  { age: 23 } - 500 
    // user.age += 1; // 500 updated 23 to 24 
    // console.log("After update", user.age) //new value in console {age:24}
    // console.log("user", user) // user details with updated age but in ui it won't update in console it is update  { name: "Rehana", age: 24 } 
    // setUser(user)//setUser(#500)
    setUser({...user}) //#600 now in ui user object is updated - instead of this we can write in anotehr way 
    setUser({...user,age:user.age+1})
  }

  //setUser(user) - doesn't do deep comparison only do shallow comparison ( memory referncs compare)when it comes to non primitive data type 
  //this setState re-render when data(reference) is changed between prevstate and currentstate then only re-render 
  //but here same reference is there so component didn't re-render
  //instead of directly setting user object - create another object  and spread the data user setUser({...user})
  //  with this way new memory refrence is set and then changed

  return (
    <div>
      <h1>Counter Component</h1>
      <p>count {count}</p>
      <button onClick={increment}>Increment</button>

      <h3>for non primitive data types</h3>
      <h5>User</h5>
      <p>Name : {user.name} - Age:{user.age}</p>
      <button onClick={incrementAge}>Update Age</button>
    </div>
  )
}

export default Counter
