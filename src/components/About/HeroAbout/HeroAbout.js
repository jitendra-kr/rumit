import React from "react";

import classes from "./HeroAbout.module.css";
import Auxilary from "../../../hoc/Auxilary/Auxilary";

const heroAbout = (props) => (
  <Auxilary>
    <div className={classes.HeroAbout}>
      <h2 className={classes.HeroMainDescription}>
        Hi, I’m Rumit. Nice to meet you.
      </h2>
      <p className={classes.HeroSubDescription}>
        Since beginning my journey as a software developer nearly 4 years ago,
        I've done work for companies, consulted the startups, and collaborated
        with talented people to create digital products for both business and
        consumer use. I'm quietly confident, naturally curious, and perpetually
        working on improving my chops one problem at a time.
      </p>
    </div>
  </Auxilary>
);

export default heroAbout;
