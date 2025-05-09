import React, { useEffect } from 'react'

//working of useEffect in updating /unmounting phase

//useEffect has callback function
//useEffect(callback)
//it has 2 cases either i should return nothing (undefined) or return another function called cleanup function
//callback() : undefined | function
//empty depenedcy list advantage when mounting then only it executes from 2nd render onwards any updaton happened then it won't execute
//cleanup function is executes when component unmount -> used to cleanup the activity upon mounting and updating
//here cleanup function executes after the ui is unmounted in functional components but in class components before the ui is unmounting componentWillUnmount() executes

const UpdateUnmount = () => {

    useEffect(()=>{
        console.log("component mounted")
        return ()=>{
            console.log("clean up function")
        }
    },[])
    
  return (
    <div>
      <p>App Component</p>
    </div>
  )
}

export default UpdateUnmount
