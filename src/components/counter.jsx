import React, { useState } from "react";

const Counter = ({ counter: { id, value: blah }, onDelete }) => {
  const [count, setCount] = useState(blah);

  const handleIncrement = () => setCount(count + 1);

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
      <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>
        increment
      </button>
      <button
        className="btn btn-sm btn-danger m-2"
        onClick={() => onDelete(id)}
      >
        delete
      </button>
    </>
  );
};

export default Counter;
