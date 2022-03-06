import React, { useState } from "react";

const Button = () => {
  const [counterValue, setCounterValue] = useState(0);

  const handleClick = (param) => {
    setCounterValue(counterValue + param);
  };

  return (
    <>
      <div>{counterValue}</div>
      <button onClick={() => handleClick(3)}>click me </button>
    </>
  );
};

export default Button;
