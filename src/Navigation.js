import React from "react";
import "./Navigation.css";
export const Navigation = (props) => {
  return (
    <div id="NavigationCenter">
      <div id="logo">
        <div id="Navigation">{props.zdj}</div>
      </div>
      <div id="Navigation">{props.menu}</div>
      <div id="Navigation">{props.byk}</div>
      <div id="Navigation">{props.dzik}</div>
      <div className="Navigation">{props.jeleń}</div>
      <div className="Navigation">{props.sarna}</div>
    </div>
  );
};
