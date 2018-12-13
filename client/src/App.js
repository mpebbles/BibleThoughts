import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  // This is just here to test API
  // TODO: actual login component
  login() {
    axios({
      method: "post",
      url: "/api/login/",
      data: { phrase: "phrase", pin: "1234"},
    }).then(res => {

    });
  }

  componentDidMount() {
    this.login();
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
