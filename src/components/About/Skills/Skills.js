import React, { Component } from "react";
import Skill from "./Skill/Skill";
import classes from "./Skills.module.css";
import backend from "../../../assets/images/designer.png";
import frontend from "../../../assets/images/frontend.png";
import database from "../../../assets/images/mentor.png";

class Skills extends Component {
  state = {
    skills: [
      {
        name: "Backend",
        imageName: backend,
        description:
          "I like to code things from scratch, and enjoy bringing ideas and integrate new features.",
        languages: ["Node", "Hapi", "Express", "SugarCRM", "PHP"],
        frameworks: ["Zend", "Symphony", "Pimcore"],
        label: "Framework or Languages",
      },
      {
        name: "Frontend",
        imageName: frontend,
        description:
          "I like to bring new life to frontend by implementing latest technologies.",
        languages: ["Javascript", "CSS", "HTML"],
        frameworks: ["ReactJS", "ExtJS", "BackboneJS", "jQuery"],
        label: "Framework or Languages",
      },
      {
        name: "Database",
        imageName: database,
        description:
          "I like to play and analyse with data, write big optimised and efficient queries.",
        languages: ["MySQL", "Mongo"],
        frameworks: [],
        label: "Databases I Know",
      },
      {
        name: "Devops",
        imageName: backend,
        description:
          "I like to work in this field of technlogies too so that our work is more efficient and fast",
        languages: ["Jenkins", "Docker", "Github", "BitBucket"],
        frameworks: [],
        label: "Tools I know",
      },
    ],
  };
  render() {
    return (
      <div className={classes.Skills}>
        {this.state.skills.map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            image={skill.imageName}
            desc={skill.description}
            languages={skill.languages}
            frameworks={skill.frameworks}
            label={skill.label}
          />
        ))}
      </div>
    );
  }
}

export default Skills;
