import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../css/login.css";
import CreateAccountForm from "./Login/CreateAccountForm";
import LoginForm from "./Login/LoginForm";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: true
    };
  }

  componentWillMount() {
    try {
      axios({
        method: "get",
        url: "/api/isLoggedIn/"
      }).then(res => {
        if (res.status === 200) {
          this.props.history.push("/home");
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleNeedAccount(event) {
    this.setState({ showLogin: !this.state.showLogin });
  }

  render() {
    return (
      <div className="center-box">
        {this.state.showLogin ? <LoginForm /> : <CreateAccountForm />}
        {this.state.showLogin ? (
          <button
            type="button"
            onClick={this.handleNeedAccount.bind(this)}
            className="create-account-btn"
          >
            Need an account?
          </button>
        ) : (
          <button
            type="button"
            onClick={this.handleNeedAccount.bind(this)}
            className="create-account-btn"
          >
            Already have an account?
          </button>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
