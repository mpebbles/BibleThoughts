import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../css/bootstrap.min.css";
import "../../css/login.css";

class CreateAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      phrase: "",
      pin: "",
      invalid: false
    };
  }

  createAccountHandler() {
    if (this.state.phrase.length < 5 || !this.state.pin.length) {
      this.setState({ invalid: true });
      return;
    }
    axios({
      method: "post",
      url: "/api/createAccount/",
      data: { phrase: this.state.phrase, pin: this.state.pin }
    })
      .then(res => {
        if (res.status === 200) {
          // User is logged in
          this.props.history.push("/home");
        } else this.setState({ invalid: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChangePhrase(event) {
    const phrase = event.target.value;
    // verify phrase characters in whitelist
    if (
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz".indexOf(
        phrase[phrase.length - 1]
      ) !== -1 ||
      !phrase.length
    )
      this.setState({ phrase: phrase });
  }

  handleChangePIN(event) {
    const pin = event.target.value;
    // verify PIN is only digits
    if ("0123456789".indexOf(pin[pin.length - 1]) !== -1 || !pin.length)
      this.setState({ pin: pin });
  }

  render() {
    return (
      <form>
        {this.state.invalid ? (
          <p style={{ color: "red", size: "2em", float: "left" }}>
            Invalid phrase or PIN
          </p>
        ) : null}
        <div className="form-group">
          <label>Identification Phrase</label>
          <input
            type="text"
            className="form-control"
            maxLength="100"
            placeholder="Enter a phrase to identify yourself (A-Z, a-z and spaces only)"
            onChange={this.handleChangePhrase.bind(this)}
            value={this.state.phrase}
          />
        </div>
        <div className="form-group">
          <label>PIN</label>
          <input
            type="password"
            maxLength="6"
            className="form-control"
            placeholder="Enter a unique PIN (e.g. 123456)"
            onChange={this.handleChangePIN.bind(this)}
            value={this.state.pin}
          />
        </div>
        <div />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.createAccountHandler.bind(this)}
        >
          Create Account
        </button>
      </form>
    );
  }
}

export default withRouter(CreateAccountForm);
