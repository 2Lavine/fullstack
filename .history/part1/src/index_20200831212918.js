import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = (props) => {
  return <div>{props.counter}</div>;
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
        <button onClick={increse}> plus</button>
        <button onClick={toZero}> toZero</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
