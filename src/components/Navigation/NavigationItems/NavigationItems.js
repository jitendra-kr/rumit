import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      About
    </NavigationItem>
    <NavigationItem link="/contact">Say Hello</NavigationItem>
  </ul>
);

export default navigationItems;
