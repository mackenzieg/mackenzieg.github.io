import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.company}</a> - {data.position}</h4>
      <p className="daterange"> {data.daterange} | {data.location}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point} dangerouslySetInnerHTML={{ __html: point }} />
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
