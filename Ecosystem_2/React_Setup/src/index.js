import React  from "react";
import ReactDOM from "react-dom/client";
import "./style.css"

const heading = React.createElement("h1",{id:'title',className:"container"},"Intrdouction to react")

const rootELe =ReactDOM.createRoot(document.getElementById("root"))

rootELe.render(heading)


//React + ReactDOM + our code (src code) ==> bundle.js