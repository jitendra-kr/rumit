import React, { Component } from "react";
import classes from "./Testimonials.module.css";
import avatar from "../../../assets/images/avatar.png";
import Testimonial from "./Testimonial/Testimonial";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
class Testimonials extends Component {
  state = {
    testimonials: [
      {
        name: "Amarjeet Pati",
        image: avatar,
        desc:
          "Rumit was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.",
        designation: "Software Developer, Pimcore",
      },
      {
        name: "Paresh Rai",
        image: avatar,
        desc:
          "Rumit's a clear communicator with the tenacity and confidence to really dig in to tricky scenarios and the collaborative friction that's needed to produce excellent work.",
        designation: "Sr. Software Developer, Sopra Steria",
      },
      {
        name: "Akash Jha",
        image: avatar,
        desc:
          "It has been a real pleasure working with Rumit. He has been very professional and very clear in all communications, which I appreciate.",
        designation: "Sr. Software Developer, Gartner",
      },
    ],
    index: 0,
  };

  changeTestimonial = (newIndex) => {
    this.setState({
      index: newIndex,
    });
  };

  render() {
    const index = this.state.index;
    const testimonial = [...this.state.testimonials][index];
    return (
      <Auxilary>
        <div className={classes.Testimonials}>
          <h2>Testimonials</h2>
          <p>People I've worked with have said some nice things...</p>
          <div className={classes.TestimonialCrousel}>
            <Testimonial
              index={index}
              testimonials={this.state.testimonials}
              image={testimonial.image}
              name={testimonial.name}
              desc={testimonial.desc}
              designation={testimonial.designation}
              changeTestimonial={this.changeTestimonial}
            ></Testimonial>
          </div>
        </div>
      </Auxilary>
    );
  }
}

export default Testimonials;
