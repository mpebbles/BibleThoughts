import React, { Component } from "react";
import Control from "./Control";
import ProfileContent from "./Profile/ProfileContent";
import "../css/main.css";

class Profile extends Component {
  render() {
    return (
      <div className="main">
        <Control />
        <ProfileContent />
      </div>
    );
  }
}

export default Profile;
