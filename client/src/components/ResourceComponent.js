import React, { Component } from "react";
import ResourceContainer from "../containers/ResourceContainer";
import AddResource from "./Resources/AddResource";
import "../css/main.css";


class ResourceComponent extends Component {

  render() {
    return (
      <div id="resource-component">
        <h5 className="left-heading">Resources</h5>
        <ResourceContainer className="resource-container" />
        <AddResource />
      </div>
    );
  }
}

export default ResourceComponent;
