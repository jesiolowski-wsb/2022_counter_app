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

  return counters.map((coo) => (
    <Counter key={coo.id} counter={coo} onDelete={handleDelete} />
  ));
};

export default Counters;
