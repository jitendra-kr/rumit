import React from "react";

import classes from "./About.module.css";
import HeroHeader from "./HeroHeader/HeroHeader";
import HeroAbout from "./HeroAbout/HeroAbout";
import Skills from "./Skills/Skills";
import Companies from "./Companies/Companies";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import AboutFooter from "./AboutFooter/AboutFooter";
import Blogs from "./Blogs/Blogs";
const about = (props) => (
  <div className={classes.About}>
    <HeroHeader></HeroHeader>
    <HeroAbout></HeroAbout>
    <Skills></Skills>
    <Blogs></Blogs>
    <Companies></Companies>
    <Projects></Projects>
    <Testimonials></Testimonials>
    <AboutFooter></AboutFooter>
  </div>
);

export default about;
