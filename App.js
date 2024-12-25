import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement()
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => React.createElement => ReactElement-JS Object +> HTMLElement(render)
const jsxHeading = <h1 id="heading">Hello React JSX</h1>;

const HeadingComponent = () => {
  return (
    <div>
      <div>hello</div>
      <h1> {console.log("gdhgghh")}</h1>
    </div>
  );
};
//
console.log(jsxHeading, "jsxHeadingjsxHeading");
const heading = React.createElement("H1", { id: "heading" }, "Mission react");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading, "headingheading");
root.render(<HeadingComponent />);
