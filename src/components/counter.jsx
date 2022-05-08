import React from "react";

const Counter = ({ counter, onDelete, onIncrement }) => {
  const getClassNames = () => {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return counter.value === 0 ? <h1>Zero</h1> : counter.value;
  };

  return (
    <>
      <span className={getClassNames()}>{formatCount()}</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => onIncrement(counter)}
      >
        increment
      </button>
      <button
        className="btn btn-sm btn-danger m-2"
        onClick={() => onDelete(counter.id)}
      >
        delete
      </button>
    </>
  );
};

export default Counter;
