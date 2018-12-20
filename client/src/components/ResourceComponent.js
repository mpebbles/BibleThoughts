import React, { Component } from "react";
import ResourceContainer from "../containers/ResourceContainer";
import AddResource from "./Resources/AddResource";
import "../css/main.css";


class ResourceComponent extends Component {

  render() {
    return (
      <div id="resource-component">
        <ResourceContainer className="resource-container" />
        <AddResource />
      </div>
    );
  }
}

export default ResourceComponent;
