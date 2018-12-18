import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../../css/main.css";

class ProfileContent extends Component {
  logoutHandler() {
    axios({
      method: "post",
      url: "/api/logout/",
      data: {}
    })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteAccountHandler() {
    if (window.confirm("Are you sure you want to delete your account?")) {
      axios({
        method: "post",
        url: "/api/deleteAccount/",
        data: {}
      })
        .then(res => {
          this.props.history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div className="main-box">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.logoutHandler.bind(this)}
        >
          Logout
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.deleteAccountHandler.bind(this)}
          style={{ marginLeft: "2%" }}
        >
          Delete Account
        </button>
      </div>
    );
  }
}

export default withRouter(ProfileContent);
