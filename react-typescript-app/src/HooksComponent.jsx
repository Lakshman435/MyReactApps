import React, { useState } from "react";

const HooksComp = () => {
  const [count, setCount] = useState(0);

  const handlClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={handlClick}>count</button>
    </div>
  );
};
export default HooksComp;
