import React from 'react'

//for order summary
const Child2 = ({selectedToppings}) => {
  return (
    <div>
      <h4>order sumamry - your pizza</h4>
        {selectedToppings.length>0 ? (
            <ul>
                {selectedToppings.map((topping,index)=>(
                    <li key={index}>{topping}</li>
                ))}
            </ul>
        ):(
            <p>No toppings selected</p>
        )}
    </div>
  )
}

export default Child2
