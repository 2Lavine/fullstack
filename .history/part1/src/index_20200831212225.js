import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    console.log("clicked");
  };
  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);
  return (
    <div>
      {counter}
      <div>
        <button onClick={handleClick}></button>
      </div>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
