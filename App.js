import React from "react";
import ReactDOM from "react-dom/client";
const heading  = React.createElement("h1", {
    id:"headingId"
}, "Hello World from React script file");


const parentDiv = React.createElement("div", {id: "parentDiv"}, heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv);