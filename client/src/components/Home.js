import React, { Component } from "react";
import Control from "./Control";
import "../css/main.css";
import ResourceComponent from "./ResourceComponent";

class Home extends Component {

  render() {
    return (
      <div className="main">
        <Control />
        <ResourceComponent />
      </div>
    );
  }
}

export default Home;
