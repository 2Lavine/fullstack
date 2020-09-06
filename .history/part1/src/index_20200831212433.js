import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    console.log("clicked");
    // alert("233");
    setCounter(counter + 1);
  };
  return (
    <div>
      {counter}
      <div>
        <button onClick={handleClick}> plus</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
