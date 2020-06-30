import React from "react";
import classes from "./HeroHeader.module.css";
import avatar from "../../../assets/images/avatar.png";
import hero from "../../../assets/images/hero.png";
import Auxilary from "../../../hoc/Auxilary/Auxilary";

const heroHeader = (props) => (
  <Auxilary>
    <div className={classes.HeroHeader}>
      <h2>Full Stack (MERN) & SugarCRM Developer</h2>
      <p className={classes.ParaText}>
        I design and code beautifully simple things, and I love what I do.
      </p>
      <img src={avatar} alt="Avatar" />
      <div className={classes.DesignPhoto}>
        <img src={hero} alt="Hero" />
      </div>
    </div>
  </Auxilary>
);

export default heroHeader;
