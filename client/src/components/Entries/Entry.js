import React, { Component } from "react";
import "../../css/bootstrap.min.css";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function addElipses(text) {
  if (text.length > 200) return " ...";
  return "";
}

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFull: false,
      showDelete: false
    };
  }

  render() {
    return (
      <li
        style={{ color: "white", borderBottom: "1px solid gray" }}
        className=""
      >
        {!this.state.showFull ? (
          <div style={{ padding: "5px" }}>
            <div
              style={{
                textAlign: "left",
                cursor: "pointer"
              }}
              onClick={e => {
                this.setState({ showFull: !this.state.showFull });
              }}
            >
              {this.props.content.substring(0, 200) +
                addElipses(this.props.content)}
            </div>
            <div
              style={{
                paddingBottom: "5%",
                display: "inline",
                marginLeft: "1px"
              }}
            >
              {this.props.tags.map(tag => (
                <span
                  key={tag}
                  className="badge badge-primary pill-link-wrapper"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              width: "100%",
              height: "100%",
              padding: "5%",
              background: "rgba(100,100,100,1)"
            }}
          >
            <FontAwesomeIcon
              className="no-background-btn"
              icon="times"
              size="1x"
              title="exit"
              color="white"
              style={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={e => {
                if (this.state.showFull)
                  this.setState({ showFull: false, showDelete: false });
                else this.setState({ showFull: true, showDelete: true });
              }}
            />
            <div
              style={{
                marginTop: "5%",
                height: "100%",
                width: "110%",
                marginRight: "-100px" /* maximum width of scrollbar */,
                paddingRight: "100px" /* maximum width of scrollbar */,
                overflowY: "scroll",
                float: "left",
                textAlign: "left"
              }}
            >
              {this.props.content}
              <div
                style={{ height: "10%", position: "relative", padding: "2%" }}
              >
                <div
                  style={{
                    display: "inline",
                    marginLeft: "1px"
                  }}
                >
                  {this.props.tags.map(tag => (
                    <span
                      key={tag}
                      className="badge badge-primary pill-link-wrapper"
                    >
                      {tag}
                    </span>
                  ))}

                  <div style={{ width: "100%", float: "left", padding: "5%" }}>
                    {!this.state.showDelete ? (
                      <FontAwesomeIcon
                        className="no-background-btn"
                        icon="ellipsis-h"
                        size="1x"
                        title="show more"
                        color="white"
                        onClick={e => {
                          this.setState({ showDelete: !this.state.showDelete });
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="no-background-btn"
                        icon="trash"
                        size="1x"
                        title="delete"
                        color="white"
                        onClick={this.props.onDeleteClick}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    );
  }
}

export default Entry;
