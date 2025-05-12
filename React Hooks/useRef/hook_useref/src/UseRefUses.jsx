import React, { useEffect, useRef } from 'react'

const UseRefUses = () => {
    const element = {current:null}
    const elementref = useRef(null)
    useEffect (()=>{
        debugger
        console.log(element)
    },[])
    useEffect(()=>{
        debugger
        console.log(elementref)
        elementref.current.innerText="changedText"
    })
  return (
    <div>
        {/* ref attribute current value is mandatory */}
        
      <h1 ref={element}> useRef Uses</h1>
      <h3 ref={elementref}>using useRef</h3>
    </div>
  )
}

export default UseRefUses

//here const element = {current:null}=>  <h1 ref={element}> useRef Uses</h1> 
// current: h1 it won't print null 
//{ current: null } behaves like a ref object
//even if it's not created using useRef(). It will then assign the DOM element to .current.
//React automatically assigns the DOM element (the <h1>) to element.current.


//instead of creating(manuall object)  const element = {current:null} like this objects we can use only once create object using useRef we can re use them 
//const element = useRef(null)

/**
 * A manually created ref object → { current: null }

A ref created using useRef(null)

Even though they look similar ({ current: null }), React treats them differently.

const elementRef = useRef(null);
This creates a stable reference object across renders.

React knows it’s a React-managed ref, so it assigns the DOM node (<h3>) to elementRef.current automatically after mount.  //{ current: <h3>...</h3> }

 2. Manual object: { current: null }
 This is not a real ref to React — just a plain JS object.

However, React still accepts it as a valid ref, and during rendering, React assigns the DOM element (<h1>) to element.current.

But it does not persist across re-renders. If your component re-renders, element will be recreated and its current value reset to null.

So, on first render:
{ current: <h1>...</h1> }
But on re-render:
{ current: null }
 //every re-render we need to create again and again so we are using useRef

 */

 //where we can use 
 /**
    when we need deal with real DOM elements to handle forms like etc
    when we do actions in child component from parent component we can pass reference as a

  */