import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const rootEle = ReactDOM.createRoot(document.getElementById("root"))

class Counter extends Component {

    constructor(props){
        super(props);
        this.state={count:10}
    }
    increment=()=>{
        this.setState({count : this.state.count +1});
        console.log(this.state.count) // in console it is printing old value not updated but in ui it is updated 
    }

    /**
        1. this.setState(...) is asynchronous
            When you call setState, React schedules the update, it doesn't apply it immediately.

            So when console.log(this.state.count) runs right after setState, the state is still the old one.

        2. UI is updated after re-render
            React updates the state in the background, then re-renders the component.

            The new count value is passed into the render() method.

            That’s why the UI shows the new value — but your console.log happens before this re-render completes.
     */

            handleIncrement = () =>{
                this.setState({count : this.state.count +1},()=>{
                    console.log(this.state.count)
                });
            }

            //in handleIncrement Callback inside setState passed as a second argument  immeditely  Updated value
   render(){
    return(
        <div>
             <h1>Async nature of setState</h1>
             <h6>count : {this.state.count}</h6>
             <button onClick={this.increment}>Increment</button>
             <button onClick={this.handleIncrement}> Update</button>
        </div>
    )
   }

}
rootEle.render(<Counter />)