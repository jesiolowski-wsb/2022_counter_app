import React from "react";

const Counter = ({ counter: { id, value: blah }, onDelete, onIncrement }) => {
  const getClassNames = () => {
    let classes = "badge m-2 badge-";
    classes += blah === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return blah === 0 ? <h1>Zero</h1> : blah;
  };

  return (
    <>
      <span className={getClassNames()}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={onIncrement}>
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
