import React, { Component } from "react";
import Control from "./Control";
import "../css/main.css";
import ResourceComponent from "./ResourceComponent";
import { fetchResources } from "../actions/actions";
import { connect } from "react-redux";

let createHandler = function(dispatch) {
  let fetchResourcesFunc = function() {
    dispatch(fetchResources());
  };

  return {
    fetchResourcesFunc
  };
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.fetchResourcesFunc = createHandler(
      this.props.dispatch
    ).fetchResourcesFunc;
  }

  componentWillMount() {
    // get resources from server
    this.fetchResourcesFunc();
  }

  render() {
    return (
      <div className="main">
        <Control />
        <ResourceComponent />
      </div>
    );
  }
}

export default connect()(Home);
