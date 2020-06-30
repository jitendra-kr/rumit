import React from "react";
import classes from "./Company.module.css";
import Auxilary from "../../../../hoc/Auxilary/Auxilary";

const company = (props) => (
  <Auxilary>
    <div className={classes.Company}>
      <img width="150px" height="80px " src={props.image}></img>
    </div>
  </Auxilary>
);

export default company;
