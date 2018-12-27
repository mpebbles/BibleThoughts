import React, { Component } from "react";
import Control from "./Control";
import "../css/main.css";
import ResourceComponent from "./ResourceComponent";
import ContentEntry from "./ContentEntry";
import { fetchResources } from "../actions/actions";
import { connect } from "react-redux";
import EntriesContainer from "../containers/EntriesContainer.js";


//let createHandler = function(dispatch) {
//  let fetchResourcesFunc = function() {
//    dispatch(fetchResources());
//  };

//  return {
//    fetchResourcesFunc
//  };
//};

class EntriesWrapper extends Component {
  //constructor(props) {
  //  super(props);
  //this.fetchResourcesFunc = createHandler(
  //  this.props.dispatch
  //).fetchResourcesFunc;
  //}

  //componentWillMount() {
  // get resources from server
  //this.fetchResourcesFunc();
  //}

  handleScroll = e => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight + 2;
    if (bottom) {
      console.log("bottom");
    }
  };

  render() {
    return (
      <div onScroll={this.handleScroll} id="entries">
        <div id="entries-child">
          <EntriesContainer />
        </div>
      </div>
    );
  }
}

export default connect()(EntriesWrapper);
