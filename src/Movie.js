import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w300';

// Destructure props so I don't have to use props.
const Movie = ({ movie }) => {
  
  return (
    <div>
      <div key={movie.id} className="card">
        <Link to={`/${movie.id}`}>
          <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}></img>
        </Link>
      </div>
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


// 5:35 Understanding React Router