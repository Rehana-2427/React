import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//Life cycle phases of component
//each component will always goes through 3 phases in its life cycle
/**
 Mounting phase  - Creating phase -display in ui 
                    3 methods should call in mounting phase 
                    constructor()
                    render()
                    componentDidMount()
 Updating Phase  - state updating re-render (react component goes to n number of updates)
                    render() 
                    componentDidUpdate()
 UnMounting phase - component remove from ui  - it executes only once in its life cycle
                    componentWillUnmount()
                    differ in functional  & class  components
                    class components - before unmounts component   only it exectues 
                    functional components - after unmount component then executres
                    to unmount we don't have any specfic function we need to write some other function or code to remove ui
 */

function remount () {
    rootEle.render(<LifeCyclePhases />)
}

function unmount() {
    rootEle.render(
        <div>
            <h2>Component Unmounted</h2>
            <button onClick={remount}>Remount</button>
        </div>
    )
}

const rootEle = ReactDOM.createRoot(document.getElementById("root"))
class LifeCyclePhases extends Component {
    constructor(props) { // mounting phase  - only one time this constructor executes in its life cycle
        debugger
        super(props)
        this.state = { count: 0 }
    }

    increment = () => {

        this.setState({ count: this.state.count + 1 })
        // console.log("clikced"+ this.state.count)
        rootEle.render(<LifeCyclePhases />)
    }

    
    render() { //mounting phase - render() can executes multiple times
        debugger
        return (
            <div>
                <h1>LifeCyclePhases of component</h1>
                <p>Example : Counter</p>
                <h4>Counter : {this.state.count}</h4>
                <button onClick={this.increment}>Increment</button>
                <button onClick={unmount}>UnMount</button>
            </div>
        )
    }

    //mounting phase - after render method it executes  (after ui dispalyed on the screen)
    //only one time this componentDidMount() executes in its life cycle
    componentDidMount() {
        debugger
        console.log("componnet mounting")
    }

    //update n number of times depends on how many time we are updating
    //additionally it takes 2 paramters also prevProps, prevState
    componentDidUpdate(prevProps, prevState) {
        debugger
        console.log(prevProps, prevState)
        console.log(this.props, this.state)
        console.log("updated")
    }

    componentWillUnmount() {
        debugger
        console.log("component will unmount")
    }
}


rootEle.render(<LifeCyclePhases />)