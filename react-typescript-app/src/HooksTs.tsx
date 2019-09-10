import React, { useState } from "react";

interface Props {}
const HooksTs: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handlClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>Hooks with Typescript</h3>
      <p>you clicked {count} times</p>
      <button onClick={handlClick}>count</button>
    </div>
  );
};
export default HooksTs;
