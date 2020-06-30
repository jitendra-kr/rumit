import React, { Component } from "react";
import classes from "./Projects.module.css";
import airbus from "../../../assets/images/Airbus.png";
import gartner from "../../../assets/images/Gartner.png";
import fbBrands from "../../../assets/images/fbbrands.png";
import vgl from "../../../assets/images/vgl.png";
import sugarcrm from "../../../assets/images/sugarcrm.png";
import compease from "../../../assets/images/compease.png";
import Project from "./Project/Project";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
class Projects extends Component {
  state = {
    projects: [
      {
        name: "GTSI",
        image: airbus,
        desc:
          "Software to capture Ground test Requirement of an Aircraft.Built on Nodejs and Angular js.",
      },
      {
        name: "Gartner Digital Market",
        image: gartner,
        desc:
          "Software for the sales team to maximise their sales. Built using SugarCRM",
      },
      {
        name: "Fb Brands",
        image: fbBrands,
        desc:
          "Software to store their fashion products and categories information. Built on Pimcore",
      },
      {
        name: "VGL Group",
        image: vgl,
        desc:
          "Built in Pimcore to store the details of their jewellery and their non- jewellary products.",
      },
      {
        name: "Cu Solution Sugarcrm",
        image: sugarcrm,
        desc:
          "Built using SugarCRM to capture every detail of sales happening in the company.",
      },
      {
        name: "Compease",
        image: compease,
        desc:
          "Compease is a complete cloud-based salary administration solution used by businesses.",
      },
    ],
  };
  render() {
    return (
      <Auxilary>
        <div className={classes.Projects}>
          <h2 className={classes.Heading}>My Projects</h2>
          <p>
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Eventually, I decided that it would be a fun challenge to
            try designing and building my own.
          </p>
        </div>
        <div className={classes.ProjectGrid}>
          {this.state.projects.map((project) => (
            <Project
              image={project.image}
              key={project.name}
              desc={project.desc}
              name={project.name}
            ></Project>
          ))}
        </div>
        <p className={classes.MoreProjects}>
          <a target="_blank" href="https://github.com/rumit07">
            <span>
              <svg
                className={classes.GithubIcon}
                viewBox="0 0 16 16"
                version="1.1"
                aria-hidden="true"
                data-icon="github"
                role="img"
                focusable="false"
                data-prefix="fab"
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              &nbsp; &nbsp;See More on Github
            </span>
          </a>
        </p>
        <hr className={classes.Line}></hr>
      </Auxilary>
    );
  }
}

export default Projects;
