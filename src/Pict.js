import React from "react";
import "./Pict.css";
export const Pict = (props) => {
  return (
    <div id="BPict">
      <div id="thatIsFirstPhoto">{props.zdjecie}</div>
    </div>
  );
};
