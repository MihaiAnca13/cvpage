import React from "react";

const Skill = props => (
  <span className={`skill ${props.color ? props.color : "default"}`}>
    {props.children}
  </span>
);

export default Skill;