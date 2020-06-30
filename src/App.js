import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Portfolio from "./containers/Portfolio/Portfolio";
import SayHello from "./containers/SayHello/SayHello";
import SucessfullyContacted from "./containers/SucessfullyContacted/SucessfullyContacted";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={Portfolio}></Route>
          <Route path="/contact" component={SayHello}></Route>
          <Route path="/success" component={SucessfullyContacted}></Route>
        </Layout>
      </div>
    );
  }
}

export default App;
