import React from "react";
import classes from "./Testimonial.module.css";
import Auxilary from "../../../../hoc/Auxilary/Auxilary";

const testimonial = (props) => (
  <Auxilary>
    <div className={classes.Testimonial}>
      <div>
        <img width="80px" height="80px " src={props.image}></img>
      </div>
      <h5 className={classes.Quote}>“{props.desc}”</h5>
      <h4>{props.name}</h4>
      <p className={classes.Designation}>{props.designation}</p>
      <div className={classes.CrouselNavBox}>
        <ul className={classes.CrouselNavHeader}>
          {props.testimonials.map((object, i) => {
            let classApplied = classes.CrouselNav;
            return (
              <li key={i} className={classApplied}>
                <a
                  className={props.index == i ? classes.active : null}
                  onClick={() => props.changeTestimonial(i)}
                >
                  {" "}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </Auxilary>
);

export default testimonial;
