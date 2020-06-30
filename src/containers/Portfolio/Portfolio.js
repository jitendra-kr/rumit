import React, { Component } from "react";
import About from "../../components/About/About";
import Auxilary from "../../hoc/Auxilary/Auxilary";
class Portfolio extends Component {
  state = {};
  render() {
    return (
      <Auxilary>
        <About> </About>
      </Auxilary>
    );
  }
}

export default Portfolio;
