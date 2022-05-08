import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 4 },
    { id: 3, value: 120 },
    { id: 4, value: 88 },
  ]);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleReset = () => {
    const newCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  };

  return (
    <>
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        reset
      </button>
      {counters.map((coo) => (
        <Counter
          key={coo.id}
          counter={coo}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
        />
      ))}
    </>
  );
};

export default Counters;
