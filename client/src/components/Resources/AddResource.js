import React, { Component } from "react";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { addResource } from "../../actions/actions";
library.add(fas);

let createHandler = function(dispatch) {
  let addResourceFunc = function(url, text) {
    dispatch(addResource(url, text));
  };

  return {
    addResourceFunc
  };
};

class AddResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      formURL: "",
      text: ""
    };
    this.addClickHandler.bind(this);
    this.actionHandler = createHandler(this.props.dispatch).addResourceFunc;
  }

  addClickHandler() {
    this.setState({ showForm: !this.state.showForm });
  }

  handleAddResource() {
    this.actionHandler(this.state.formURL, this.state.text);
    this.addClickHandler();
    this.setState({ formURL: "", text: "" });
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon
          className="no-background-btn add-icon"
          icon={this.state.showForm ? "times" : "plus"}
          size="1x"
          title="add"
          color="white"
          onClick={this.addClickHandler.bind(this)}
        />

        {this.state.showForm ? (
          <form>
            <div style={{ marginTop: "5%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                aria-describedby="URLHelp"
                maxLength="500"
                placeholder="Enter the URL"
                onChange={e => {
                  this.setState({ formURL: e.target.value });
                }}
                value={this.state.formURL}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                maxLength="50"
                className="form-control"
                placeholder="Enter the resource name"
                onChange={e => {
                  this.setState({ text: e.target.value });
                }}
                value={this.state.text}
              />
            </div>
            <div />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleAddResource.bind(this)}
            >
              Add
            </button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default connect()(AddResource);
