import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = (props) => {
  return <div>{props.counter}</div>;
};
const ButtonNew = (props) => {
  return <button onClick={props.handleClick}> {props.text}</button>;
};
const App = () => {
  const [counter, setCounter] = useState(0);
  const increse = () => {
    setCounter(counter + 1);
  };
  const toZero = () => setCounter(0);
  return (
    <div>
      <Display counter={counter}></Display>
      <div>
        <ButtonNew handleClick={increse} text="plus"></ButtonNew>
        <ButtonNew handleClick={toZero} text="toZero"></ButtonNew>
      </div>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
