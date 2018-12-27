import React from "react";
import PropTypes from "prop-types";
import Entry from "./Entry";

const Entries = ({ entries, deleteEntry }) => (
  <ul>
    {entries.map(entry => (
      <Entry
        key={entry[0]._id}
        tags={entry[1]}
        content={entry[0].text}
        onDeleteClick={() => deleteEntry(entry[0].id)}
      />
    ))}
  </ul>
);

export default Entries;
