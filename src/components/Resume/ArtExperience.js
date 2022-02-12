import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const ArtExperience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="art experience" />
    <div className="title">
      <h3>Art Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

ArtExperience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

ArtExperience.defaultProps = {
  data: [],
};

export default ArtExperience;
