import React, { Component } from "react";
import Control from "./Control";
import "../css/main.css";
import ResourceComponent from "./ResourceComponent";
import ContentEntry from "./ContentEntry";
import { fetchResources, fetchEntries } from "../actions/actions";
import { connect } from "react-redux";
import EntriesWrapper from "./EntriesWrapper";

let createHandler = function(dispatch) {
  let fetchResourcesFunc = function() {
    dispatch(fetchResources());
  };

  let fetchEntriesFunc = function() {
    dispatch(fetchEntries());
  };

  return {
    fetchResourcesFunc,
    fetchEntriesFunc
  };
};

class Home extends Component {
  constructor(props) {
    super(props);
    //this.fetchResourcesFunc = createHandler(
    //  this.props.dispatch
    //).fetchResourcesFunc;
    const handler = createHandler(this.props.dispatch);
    this.fetchResourcesFunc = handler.fetchResourcesFunc;
    this.fetchEntriesFunc = handler.fetchEntriesFunc;
  }

  componentWillMount() {
    // get resources from server
    this.fetchResourcesFunc();
    this.fetchEntriesFunc();
  }

  render() {
    return (
      <div className="main">
        <Control />
        <ResourceComponent />
        <ContentEntry />
        <EntriesWrapper />
      </div>
    );
  }
}

export default connect()(Home);
