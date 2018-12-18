import React, { Component } from "react";
import "../css/main.css";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

class Control extends Component {

  navigate(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="control">
        <FontAwesomeIcon
          className="no-background-btn"
          icon="home"
          size="2x"
          title="profile"
          color="white"
          onClick={this.navigate.bind(this, "/home")}
        />
        |
        <FontAwesomeIcon
          className="no-background-btn"
          icon="user"
          size="2x"
          title="profile"
          color="white"
          onClick={this.navigate.bind(this, "/profile")}
        />
      </div>
    );
  }
}

export default withRouter(Control);
