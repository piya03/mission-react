import React from "react";
import ReactDOM from "react-dom/client";
{
  /* <div id="parent">
  <div id='child'>
    <h1>I am H1 tag</h1>
  </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag j m m m"),
    React.createElement("h2", {}, "I am H2 b ms m tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world react m"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
