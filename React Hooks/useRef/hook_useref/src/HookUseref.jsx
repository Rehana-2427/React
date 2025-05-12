import React, { useRef, useState } from 'react';

// const list=[];
// const HookUseref = () => {
    
//     console.log("rendered")
//     const user={name:"Rehana",age:23}
//     //when mount the data on ui -> 1st render #400 -memory address
//     //2nd render #500 (data is same but refrence is changed)
//     //if we want same heap memory refrence which is 1st render(#400) throught the life cycle
//     //but we can't achieve this bcz everytime rendering the data is created again and again and stored in different different memory refrences
//     //to solve this problem we need to use useRef
//     //useRef -> it uses the refernce across the life cycle of a component


//     //to check practically we need to setState first
//     const[count,setCount] = useState(0);
//     list.push(user)
//     if(list.length ===2){
//         console.log("list",list);
//         console.log(list[0]===list[1])//false list[0] -> pointing some other memory location and list[1] -> pointing some other memory locations

//     }


//   return (
//     <div>
//         <h1>UseRef Hook</h1>
//         <p>count:{count}</p>
//         <button onClick={() =>setCount( count+1)}>Increment</button>
//     </div>
//   )
// }

// export default HookUseref


//signature 
//it takes initial value(any data type) return an object that contains current property -> that current property value is which we passed initially.
//useRef(initialValue)=>{currentValue:initalValue}

// const list=[];
// const HookUseref = () => {
    
//     console.log("rendered")
//     const user={name:"Rehana",age:23}
   
//     const[count,setCount] = useState(0);
//     const refernce = useRef({name:"Rehana",age:23}) //{current : {name,"Rehana",age:23}}
//     list.push(user)
//     if(list.length ===2){
//         console.log("list",list);
//         console.log(list[0]===list[1])//false list[0] -> pointing some other memory location and list[1] -> pointing some other memory locations

//     }

//     console.log(refernce) 
//     //output
//     /**
//      * {current: {…}}current: age: 23name: "Rehana"[[Prototype]]: Object[[Prototype]]: Object
//      */

//     const ref1 = useRef(10)
//     console.log(ref1) //output => current: 10[[Prototype]]: Object

//     const ref2=  useRef(null)
//     console.log(ref2)//current: null[[Prototype]]: Object

//   return (
//     <div>
//         <h1>UseRef Hook</h1>
//         <p>count:{count}</p>
//         <button onClick={() =>setCount( count+1)}>Increment</button>
//     </div>
//   )
// }

// export default HookUseref

//useRef -> which is created object at first render from 2nd render onwards it start giving same object
//{current : T } =>#400
//2nd render = refernce ={current:T} => #400
//3rd render = refernce ={current:T} => #400

// const list=[];
// const HookUseref = () => {
    
//     console.log("rendered")
//     const user={name:"Rehana",age:23}
   
//     const[count,setCount] = useState(0);
//     const refernce = useRef(user) //{current : {name,"Rehana",age:23}}
    

//     console.log(refernce) 
//     //output
//     /**
//      * {current: {…}}current: age: 23name: "Rehana"[[Prototype]]: Object[[Prototype]]: Object
//      */
//     list.push(refernce)
//     if(list.length ===2){
//         console.log("list",list);
//         console.log("useRef",list[0]===list[1])//true list[0] -> pointing same  memory location 
//     }

//   return (
//     <div>
//         <h1>UseRef Hook</h1>
//         <p>count:{count}</p>
//         <button onClick={() =>setCount( count+1)}>Increment</button>
//     </div>
//   )
// }

// export default HookUseref

//in useState when any update is happend using setState method then it should re-render the component
//in useRef when any update is happend in memory directly updted no re rendering happens here
//check below example



const list=[];
const HookUseref = () => {
    
    console.log("rendered")
    const user={name:"Rehana",age:23}
   
    const[count,setCount] = useState(0);
    const refernce = useRef(user) //{current : {name,"Rehana",age:23}}
    

    console.log("before",refernce) 
    //output
    /**
     * {current: {…}}current: age: 23name: "Rehana"[[Prototype]]: Object[[Prototype]]: Object
     */
    list.push(refernce)
    if(list.length ===2){
        console.log("list",list);
        console.log("useRef",list[0]===list[1])//true list[0] -> pointing same  memory location 
    }

    //when updateName clicks it won't re-render on ui it update in memory
   
    const updateName =() => {
        refernce.current.name = "Rehana S"
        console.log("after",refernce)
    }
  return (
    <div>
        <h1>UseRef Hook</h1>
        <p>count:{count}</p>
        <button onClick={() =>setCount( count+1)}>Increment</button>
        {/* add button  how it updates*/}
        <p>{user.name} {user.age}</p>
        <button onClick={updateName}>Update Name</button>
    </div>
  )
}

export default HookUseref