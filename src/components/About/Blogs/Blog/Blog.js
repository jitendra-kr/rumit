import React from "react";
import classes from "./Blog.module.css";
import Auxilary from "../../../../hoc/Auxilary/Auxilary";

const blog = (props) => (
  <Auxilary>
    <div className={classes.Blog}>
      <figure className={classes.figurefx + " " + classes.pushup}>
        <div className={classes.ImageContainer}>
          <img src={props.image} />
        </div>
        <figcaption>
          <p>{props.name}</p>
          <p className={classes.ViewBlog}>
            <a target="_blank" href={props.link}>
              View Blog >
            </a>
          </p>
        </figcaption>
      </figure>
    </div>
  </Auxilary>
);

export default blog;
