import React, { useState } from "react";

const HelloSomething = () => {
  const [something, setSomething] = useState("World");
  return <div>Hello {something}</div>;
};

export default HelloSomething;
