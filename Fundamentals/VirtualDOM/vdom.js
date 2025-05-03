
/**
  Example :
  <h1>Timer APP - Real DOM </h1>
  <input placeholder = "username" />
  <button> update Time <//button >
  <p> time </p>
 */
const rootEle = ReactDOM.createRoot(document.getElementById("vdom"))

function renderReactElements (){

    const  heading = React.createElement("h1",null,"Timer APP - Virtual DOM")
    const input = React.createElement("input",{placeholder:'UserName'});
    const button = React.createElement("button",{onClick:renderReactElements},"Update-Time");
    const timer = React.createElement("p",null,new Date().toTimeString())

    rootEle.render([heading,input,button,timer])

}

renderReactElements()


/**
 * here when we click update button just update the time only not everything
 * but in real dom everything is updated again and again
 * to check both just enter a value input and  click update button 
 * react follows virtual dom so its improve performance.
 * React follows 2 algorithms - Diffing Algorithm & Reconciliation   to update selective elements which are updated.
 */