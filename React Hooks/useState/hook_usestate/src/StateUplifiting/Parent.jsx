import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';


//in parent only need to create state , manage state , change state , and sync to child 
//stateuplifiting -> parent => child A , child B (both childes should be sync)
/**
 
Pizza Order App
Components:
Topping Selector – lets the user pick pizza toppings (like Cheese, Olives, Paneer).

Order Summary – shows the selected toppings in real time.

What happens:
You select "Cheese" and "Paneer" in the Topping Selector.

Instantly, the Order Summary shows: “You selected: Cheese, Paneer”.

Why state lifting?
The selected toppings need to be known by both components.

So, the state (selected toppings) is kept in the parent component (like PizzaApp), and both children (Topping Selector & Order Summary) access it from there.


 */
const Parent = () => {
    const [selectedToppings, setSelectedToppings] = useState([]);
    return (
        <div>
            <h3>Example of StateLifting - Pizza App</h3>
            <Child1 selectedToppings={selectedToppings} setSelectedToppings={setSelectedToppings} />
            <Child2 selectedToppings={selectedToppings} />
        </div>
    )
}

export default Parent
