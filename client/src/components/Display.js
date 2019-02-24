import React from "react";

const Display = ((props) => (
  <div className="display">
    <div>{props.value}<span className="caret">|</span></div>
  </div>
));

export default Display;
