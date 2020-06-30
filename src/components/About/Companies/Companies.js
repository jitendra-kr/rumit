import React, { Component } from "react";
import classes from "./Companies.module.css";
import avatar from "../../../assets/images/logo.png";
import Company from "./Company/Company";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
import osscube from "../../../assets/images/osscube.png";
import happiestMinds from "../../../assets/images/HappiestMinds.png";
import sopraSteria from "../../../assets/images/SopraSteria.png";
import sugarcrm from "../../../assets/images/sugarcrm.png";
import airbus from "../../../assets/images/Airbus.png";
import cuSolutions from "../../../assets/images/CUsolutions.png";
import northGate from "../../../assets/images/Northgate.png";
import gartner from "../../../assets/images/Gartner.png";

class Companies extends Component {
  state = {
    companies: [
      {
        logo: osscube,
        name: "Osscube",
      },
      {
        logo: happiestMinds,
        name: "Happiest Minds",
      },
      {
        logo: gartner,
        name: "Gartner",
      },
      {
        logo: sopraSteria,
        name: "Sopra Steria",
      },
      {
        logo: sugarcrm,
        name: "SugarCrm",
      },
      {
        logo: airbus,
        name: "Airbus",
      },
      {
        logo: cuSolutions,
        name: "Cu Solutions",
      },
      {
        logo: northGate,
        name: "Northgate",
      },
    ],
  };
  render() {
    return (
      <Auxilary>
        <div className={classes.Companies}>
          <div className={classes.Text}>
            <h2>I'm proud to have collaborated with some awesome companies:</h2>
          </div>
          <div className={classes.CompanyGrid}>
            {this.state.companies.map((company) => (
              <Company key={company.name} image={company.logo} />
            ))}
          </div>
        </div>
      </Auxilary>
    );
  }
}

export default Companies;
