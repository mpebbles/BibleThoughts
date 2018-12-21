import React, { Component } from "react";
import "../css/main.css";
import "../css/bootstrap.min.css";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { addContent } from "../actions/actions";
library.add(fas);

let createHandler = function(dispatch) {
  let addContentFunc = function(text, tags) {
    dispatch(addContent(text, tags));
  };

  return {
    addContentFunc
  };
};

class ContentEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      showForm: false,
      tagField: "",
      tags: []
    };
    this.addClickHandler.bind(this);
    this.actionHandler = createHandler(this.props.dispatch).addContentFunc;
  }

  addClickHandler() {
    this.setState({ showForm: !this.state.showForm });
  }

  handleAddTag() {
    var tempTags = this.state.tags;
    tempTags.push({ tag: this.state.tagField, id: this.state.tags.length });
    this.setState({ tagField: "", tags: tempTags });
  }

  deleteTag(id) {
    this.setState({
      tags: this.state.tags.filter(tag => {
        return tag.id !== id;
      })
    });
  }

  handleAddContent() {
    this.actionHandler(this.state.text, this.state.tags);
    this.setState({ text: "", tags: [], tagField: "", showForm: false });
  }

  render() {
    return (
      <div id="content-entry">
        <h5 className="left-heading">Content Entry</h5>
        <textarea
          placeholder="Enter content here"
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
          value={this.state.text}
          className="form-control"
          rows="5"
        />
        <div style={{ marginTop: "2%" }}>
          <h5 className="left-heading">Tags</h5>
          <div>
            {this.state.tags.map(tag => (
              <span
                key={tag.id}
                className="badge badge-primary pill-link-wrapper"
              >
                {tag.tag}
                <FontAwesomeIcon
                  className="no-background-btn"
                  icon="times"
                  size="1x"
                  title="remove"
                  color="white"
                  onClick={this.deleteTag.bind(this, tag.id)}
                />
              </span>
            ))}
          </div>
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
                    maxLength="50"
                    placeholder="Enter tag here"
                    onChange={e => {
                      this.setState({ tagField: e.target.value });
                    }}
                    value={this.state.tagField}
                  />
                </div>
                <div />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleAddTag.bind(this)}
                >
                  Create Tag
                </button>
              </form>
            ) : null}
          </div>
        </div>
        <div style={{ paddingTop: "7%" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleAddContent.bind(this)}
            style={{ float: "right" }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(ContentEntry);
