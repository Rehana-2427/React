
import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const rootELe = ReactDOM.createRoot(document.getElementById("root"))


//class component needs to extends Component class
class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Count : 10</h1>
            </div>
        )
    }
}

rootELe.render(React.createElement(Counter))


//state is nothing but that can be changable or that will be changed later inside the component 
//inside the constructor u need to define the state 
//we need to tell react to reexceute the updated component 
//manually rendering here 
/**
 this.state.count += 1;
console.log(this.state.count)
rootELe.render(<Counter1 />)
**/
// it is difficult to re-render manually ..so we have this.setState() -> it ensures to automatically re-rendering 
//this.setState() - takes updated state

class Counter1 extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 10 }
    }
    increment = () => {
        console.log(this.state.count)
        this.state.count += 1;
        console.log(this.state.count)
        // rootELe.render(<Counter1 />)//manually rendering here 
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h1>State example in class components</h1>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

rootELe.render(<Counter1 />)

