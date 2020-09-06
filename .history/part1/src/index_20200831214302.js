import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};
const ButtonNew = ({ handleClick, text }) => {
  return <button onClick={handleClick}> {text}</button>;
};
const App = () => {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };
  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };
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
        <ButtonNew
          handleClick={handleLeftClick}
          text="handleLeftClick"
        ></ButtonNew>
        <ButtonNew
          handleClick={handleRightClick}
          text="handleRightClick"
        ></ButtonNew>
      </div>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
