import React from "react";
import "../../css/bootstrap.min.css";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const Entry = ({ onDeleteClick, tags, content }) => (
  <li className="">
    {content}
    <FontAwesomeIcon
      className="no-background-btn"
      icon="times"
      size="1x"
      title="remove"
      color="white"
      onClick={onDeleteClick}
    />

    {tags.map(tag => (
      <span key={tag} className="badge badge-primary pill-link-wrapper">
        {tag}
      </span>
    ))}
  </li>
);

export default Entry;
