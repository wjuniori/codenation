import React from "react";
import "./Container.scss";

export default function Container(props) {
  return (
    <div data-testid={props.id} className="container">
      {props.children}
    </div>
  );
}
