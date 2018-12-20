import React, { Component } from "react";
import Control from "./Control";
import ResourceContainer from "../containers/ResourceContainer";
import "../css/main.css";


class Home extends Component {

  render() {
    return (
      <div className="main">
        <Control />
        <ResourceContainer />
      </div>
    );
  }
}

export default Home;
