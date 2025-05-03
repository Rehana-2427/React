import React, { Component } from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1",null," React types of Components");


// const rootELe =ReactDOM.createRoot(document.getElementById("root"))

// rootELe.render(heading)
const rootELe =ReactDOM.createRoot(document.getElementById("root"))


// Functional component example - simple function
function user1() {
    return (
      <div>
        <p>Name - Rehana</p>
      </div>
    );
  }
  
  // ✨ What is this?
  // This is a functional component – a simple JS function that returns JSX (UI).
  // Functional components are simple and lightweight, great for components that only display data.
  
  // Rendering functional component using React.createElement (old way)
  rootELe.render(React.createElement(user1));
  



// Functional component with props
function user2({ name, Age }) {
    return (
      <div>
        <p>Name - {name}</p>
        <p>Age - {Age}</p>
      </div>
    );
  }
  
  // ✨ What is props?
  // Props are inputs to components – like arguments to a function.
  // Here we are passing name and Age as props to user2 component.
  rootELe.render(React.createElement(user2, { name: "Sony", Age: 23 }));
  




// Class component without props
class user3 extends Component {
  render() {
    return (
      <div>
        <p>Name - Surendra , age: 23</p>
      </div>
    );
  }
}

// ✨ What is a class component?
// It's a JavaScript class that extends React.Component.
// You must define a `render()` method which returns JSX.
// Older React versions mostly used class components. Now, functional components with hooks are preferred.
rootELe.render(React.createElement(user3));


// Class component with props
class user4 extends Component {
    render() {
      console.log(this.props);
      return (
        <div>
          <p>Name - Surendra , age: 23</p>
          <p>Name - {this.props.name} , age: {this.props.age}</p>
        </div>
      );
    }
  }
  
  // ✨ How props work in class components?
  // We access props using `this.props` inside class components.
  rootELe.render(React.createElement(user4, { name: "Hani", age: "19" }));
  


// using constructor
// first call parent class super() - mandatory

class user5 extends Component {
    constructor(props){
        // super()
        // console.log(this.props) //undefiened
        // console.log(props)

        // here when we console this.props in constructor it is showing undefined but in render() output is coming
        //to show output for this.props in constructor we need to pass super(props)

        super(props)
        console.log(this.props)
    }
    render(){
        console.log(this.props) // output
        return(
            <div>
                <p>
                    name - Ayan 
                    age - 2 years
                </p>                

            </div>
        )

    }
}

rootELe.render(React.createElement(user5,{name:"suhana",age:2}))


//here we are uisng react.createElement is a native process it is very difficult to write 
//so we have JSX code 





// Functional component using JSX directly
function USerComponent() {
    return (
      <div>
        <p>name - Rehana</p>
      </div>
    );
  }
  
  // ✨ JSX is syntactic sugar for React.createElement
  // It's easier and cleaner to write, and behind the scenes React converts it to createElement().
  rootELe.render(<USerComponent />);
  

// Functional component with props in JSX
function USerComponent1({ name, age }) {
    return (
      <div>
        <p>name - {name}, age - {age}</p>
      </div>
    );
  }
  
  // ✨ Props in JSX
  // Passing props looks like HTML attributes when using JSX.
  rootELe.render(<USerComponent1 name="Viraj" age={23} />);
  


// Class component with JSX
class UserClassCompo extends Component {
    render() {
      return (
        <div>
          <p>Class Components</p>
        </div>
      );
    }
  }
  
  // ✨ Class component using JSX
  // Easier to write than using createElement, but you still need the render() method.
  rootELe.render(<UserClassCompo />);

  

