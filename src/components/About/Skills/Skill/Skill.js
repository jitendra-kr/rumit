import React from "react";

import classes from "./Skill.module.css";
import Auxilary from "../../../../hoc/Auxilary/Auxilary";

const skill = (props) => (
  <Auxilary>
    <div className={classes.Skill}>
      <img width="40px" height="40px " src={props.image}></img>
      <h3>{props.name}</h3>
      <p className={classes.SkillPara}>{props.desc}</p>
      <p className={classes.Language}>{props.label}</p>
      <ul>
        {props.languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
        {props.frameworks.map((framework) => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>
    </div>
  </Auxilary>
);

export default skill;
