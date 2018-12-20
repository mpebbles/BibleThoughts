import React from "react";
import "../../css/bootstrap.min.css";
import PropTypes from 'prop-types';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const Resource = ({ onDeleteClick, link, text }) => (
  <span className="badge badge-primary pill-link-wrapper">
    <span
      className="pill-link"
      // Open link in new tab on click
      onClick={() => window.open(link)}
    >
      {text}
    </span>
    <FontAwesomeIcon
      className="no-background-btn"
      icon="times"
      size="1x"
      title="remove"
      color="white"
      onClick={onDeleteClick}
    />
  </span>
);

Resource.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Resource;
