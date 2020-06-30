import React from "react";
import classes from "./Project.module.css";
import Auxilary from "../../../../hoc/Auxilary/Auxilary";

const project = (props) => (
  <Auxilary>
    <div className={classes.Project}>
      <img width="150px" height="100px " src={props.image}></img>
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
    </div>
  </Auxilary>
);

export default project;
