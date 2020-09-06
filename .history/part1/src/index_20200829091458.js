import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Hello = () => <div>just in hello</div>;
const App = () => {
  const date = new Date();

  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "hello wrorld", date.toString()),
    React.createElement("div", null, "wrorld", "sss")
  );
};
const ALl = () => (
  <div>
    <App></App>
    <Hello></Hello>
  </div>

);
ReactDOM.render(<All />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
