import React, { Component } from "react";
import classes from "./Blogs.module.css";
import mysql from "../../../assets/images/mysql.jpg";
import code from "../../../assets/images/code.jpg";
import agile from "../../../assets/images/Agile.jpg";
import javascript from "../../../assets/images/javascript.jpg";
import reactImage from "../../../assets/images/React.png";
import sugarcrm from "../../../assets/images/sugarcrmBackground.jpg";
import Blog from "./Blog/Blog";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
class Blogs extends Component {
  state = {
    blogs: [
      {
        name: "MySQL Event Scheduler",
        image: mysql,
        link:
          "https://medium.com/@rumitmittal7/mysql-events-scheduler-3ee943f76f9b",
      },
      {
        name: "Best way to determine story points-Agile",
        image: agile,
        link:
          "https://medium.com/@rumitmittal7/best-way-to-determine-story-points-agile-f7c6dec099c1",
      },
      {
        name: "Empty the Javascript Array",
        image: code,
        link:
          "https://medium.com/@rumitmittal7/javascript-empty-an-existing-array-722f9631a095",
      },
      {
        name: "Clone Object in Javascript",
        image: javascript,
        link:
          "https://medium.com/@rumitmittal7/clone-object-in-javascript-f6d759cc5476",
      },
      {
        name: "Some Useful Underscore.Js Method",
        image: reactImage,
        link:
          "https://medium.com/@rumitmittal7/some-useful-underscore-js-method-396c4454205f",
      },
      {
        name: "Hiding the Field in Sugarcrm",
        image: sugarcrm,
        link:
          "https://medium.com/@rumitmittal7/hiding-field-in-sugarcrm-conditionally-2376f2ea7717",
      },
    ],
  };
  render() {
    return (
      <Auxilary>
        <div className={classes.Blogs}>
          <h2 className={classes.Heading}>My Blogs</h2>
          <p>Here are a few blogs I've wriiten recently.</p>
        </div>
        <div className={classes.BlogGrid}>
          {this.state.blogs.map((blog) => (
            <Blog
              image={blog.image}
              key={blog.name}
              link={blog.link}
              name={blog.name}
            ></Blog>
          ))}
        </div>
        <p className={classes.MoreBlogs}>
          <a target="_blank" href="https://medium.com/@rumitmittal7">
            See More on Medium
          </a>
        </p>
        <hr className={classes.Line}></hr>
      </Auxilary>
    );
  }
}

export default Blogs;
