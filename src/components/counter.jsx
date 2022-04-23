import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.blah);

  console.log("xxxxxxxxx", props);

  const handleIncrement = (parameter) => {
    console.log("xxx", parameter);
    setCount(count + 1);
  };

  const getClassNames = () => {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return count === 0 ? <h1>Zero</h1> : count;
  };

  return (
    <>
      <span className={getClassNames()}>{formatCount()}</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => handleIncrement(4)}
      >
        increment
      </button>
    </>
  );
};

export default Counter;
