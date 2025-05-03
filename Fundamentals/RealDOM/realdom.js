// const container = document.createElement("div")
// const  heading = document.createElement("h1")
// heading.innerText = "Real DOM Element"
// container.appendChild(heading)
// document.body.appendChild(container);




/**
  Example :
  <h1>Timer APP - Real DOM </h1>
  <input placeholder = "username" />
  <button> update Time <//button >
  <p> time </p>
 */

  const container = document.getElementById("rdom")

  /** create function  */

  function renderHTML (){
    const heading = document.createElement("h1")
    heading.innerText = "Timer APP - Real DOM"

    const input  = document.createElement("input")
    input.placeholder = "userName";

    const button = document.createElement("button")
    button.innerText = "Update-Time"
    button.addEventListener("click",renderHTML)

    const timer = document.createElement("p")
    timer.innerText = new Date().toTimeString(); // to print current time

    container.innerHTML = " "// before appending existing elements clear first and then display . bcz of this it just replace the button 
    container.append(heading,input,button,timer)
  }

  renderHTML()


  /** here we are just updating timer when we click button
   * but here u can see in console all elements are updating . 
   * in large applications it is very slow bcz of the elements in real dom everytime if any change happend  browser takes time to update it becomes slow.
   * 
   *so virtual dom is introduced in react 
   */