import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Hello = (props) => <div>just in hello {props.name}</div>;
const App = ({ count }) => {
  const date = new Date();

  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "hello wrorld", date.toString()),
    React.createElement("div", null, "wrorld", "sss", count)
  );
};
let count = 0;
const refresh = () => {
  ReactDOM.render(<All count={count} />, document.getElementById("root"));
};
setTimeout(() => {
  refresh();
  count++;
}, 1000);
const All = ({ count }) => (
  <div>
    <App count={count}></App>
    <Hello name="hhh"></Hello>
  </div>
);
ReactDOM.render(<All />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
