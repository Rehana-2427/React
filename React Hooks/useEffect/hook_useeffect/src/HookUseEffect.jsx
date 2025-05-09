import React, { useEffect } from 'react'

const HookUseEffect = () => {

    useEffect(()=>{
        debugger
        console.log("inside useEffect")
    })
  return (
    <div>
        <h1>useEffect Hook</h1>
    </div>
  )
}
export default HookUseEffect

// export default HookUseEffect

/**
 *  console.log("inside useEffect") print twice in the console
 *  React 18+ (especially in development mode with Strict Mode enabled) intentionally double-invokes certain functions — including useEffect()
 * In React Strict Mode, React intentionally runs useEffect twice (only in development mode) to help you catch bugs.
 *  useEffect(()=>{
        debugger
        console.log("inside useEffect")
    }) 
    with strictmode inside useEffect  inside useEffect
      <React.StrictMode>
    <App />
  </React.StrictMode>

  without strict mode -> inside useEffect

It's not a bug, and it won’t happen in production builds.
 */




