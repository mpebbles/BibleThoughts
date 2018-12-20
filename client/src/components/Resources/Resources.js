import React from 'react';
import PropTypes from 'prop-types';
import Resource from './Resource';

const Resources = ({ resources, deleteResource }) => (
  <div>
    {resources.map(resource =>
      <Resource
        key={resource.link}
        link={resource.link}
        text={resource.text}
        onDeleteClick={() => deleteResource(resource.link)}
      />
    )}
  </div>
)

Resources.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,


  }).isRequired).isRequired,
  deleteResource: PropTypes.func.isRequired
};


export default Resources;
