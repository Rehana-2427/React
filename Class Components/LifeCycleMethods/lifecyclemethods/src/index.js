
import React from "react";
import ReactDOM from "react-dom/client";

const rootEle = ReactDOM.createRoot(document.getElementById("root"))

const heading = React.createElement("h1",null,"Life cycle methods of a component");
rootEle.render(heading)
