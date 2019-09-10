import React from "react";

import Mouse from "./Mouse";
interface Props {}

const MouseTracker: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse />
    </div>
  );
};
export default MouseTracker;
