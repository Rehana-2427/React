import React from 'react'

const CardChild = (props) => {
  return (
    <div>
        <h1>State Uplifiting</h1>
        <p>{props.name}</p>
    </div>
  )
}

export default CardChild

//before going to state uplifiting first we get to know how to send props from parent to child. 
//here App.js is a parent component and CardChild is a child component 
//now i need to send props from parent to child (App.js to CardChild.jsx)
// <CardChild name="Rehana-sending props from parent"/> like this from App.js

/**
 const CardChild = (props) => {
  return (
    <div>
      
        <p>{props.name}</p>
    </div>
  )
}
 */
//like this in child we are accessing props in child

//now i want to child to parent -> check Paret.jsx and Child1.jsx and Child2.jsx
