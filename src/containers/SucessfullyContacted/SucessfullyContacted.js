import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import successImg from "../../assets/images/success.png";
import classes from "./SucessfullyContacted.module.css";
import { NavLink } from "react-router-dom";
class SayHello extends Component {
  state = {};
  render() {
    return (
      <Auxilary>
        <div className={classes.Success}>
          <div>
            <img src={successImg} alt="success message"></img>
          </div>
          <h1 className={classes.Heading}>Message Recieved. Thanks!</h1>
          <p>I will be in touch with you shortly.</p>

          <p className={classes.BackToHome}>
            <NavLink exact to="/">
              Back to Home
            </NavLink>
          </p>
        </div>
      </Auxilary>
    );
  }
}

export default SayHello;
