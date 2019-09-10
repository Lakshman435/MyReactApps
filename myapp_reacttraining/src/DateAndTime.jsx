import React from "react";
const tick = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <h2>It is {new Date().toLocaleString()}.</h2>
    </div>
  );
};
setInterval(tick, 1000);
export default tick;
