import React from 'react';
import PropTypes from 'prop-types';
import Resource from './Resources/Resource';

const Resources = ({ resources, deleteResource }) => (
  <div>
    {resources.map(resource =>
      <Resource
        key={resource.id}
        link={resource.link}
        text={resource.text}
        onDeleteClick={() => deleteResource(resource.id)}
      />
    )}
  </div>
)

Resources.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,

  }).isRequired).isRequired,
  deleteResource: PropTypes.func.isRequired
};


export default Resources;
