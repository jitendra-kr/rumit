import React from "react";

import portfolioLogo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={portfolioLogo} alt="MyPortfolio" />
  </div>
);

export default logo;
