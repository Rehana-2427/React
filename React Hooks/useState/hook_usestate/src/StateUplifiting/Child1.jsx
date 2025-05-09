import React from 'react';

//child 1 selected toppings
const Child1 = ({selectedToppings,setSelectedToppings}) => {
    const toppingsForPizza=["cheese","oilve","tomato","paneer","mushroom","chicken"]
     const handleTopping = (topping) =>{
        if(selectedToppings.includes(topping)){
            setSelectedToppings(selectedToppings.filter(t=>t!==topping));
        }else{
            setSelectedToppings([...selectedToppings,topping])
        }
     }
  return (
    <div>
        <h4>Select Topping:</h4>
        {
            toppingsForPizza.map((topping)=>(
                <label>
                    <input type='checkbox' checked={selectedToppings.includes(topping)}
                    onChange={()=>handleTopping(topping)}
                    />
                    {topping}
                </label>
            ))
        }
    </div>
  )
}

export default Child1
