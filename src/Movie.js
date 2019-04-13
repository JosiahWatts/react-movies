import React from 'react';
import PropTypes from 'prop-types';

// Destructure props so I don't have to use props.
const Movie = ({ movie }) => {
  
  return (
    <div>
      <div key={movie.id} className="card">{movie.id}</div>
      <h3>{movie.title}</h3>
    </div>
  );

}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}

Movie.defaultProps = {
  //TODO
}

export default Movie;