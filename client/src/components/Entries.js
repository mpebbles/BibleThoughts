import React, { Component } from "react";
import Control from "./Control";
import "../css/main.css";
import ResourceComponent from "./ResourceComponent";
import ContentEntry from "./ContentEntry";
import { fetchResources } from "../actions/actions";
import { connect } from "react-redux";

//let createHandler = function(dispatch) {
//  let fetchResourcesFunc = function() {
//    dispatch(fetchResources());
//  };

//  return {
//    fetchResourcesFunc
//  };
//};

class Entries extends Component {
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
        <ul>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
          <li>Entry 1</li>
          <li>Entry 2</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default connect()(Entries);
