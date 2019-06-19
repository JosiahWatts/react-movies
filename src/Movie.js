import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w300';

// Destructure props so I don't have to use props.
const Movie = ({ movie }) => {
  return (
    <MovieCard key={movie.id}>
      <Link to={`/${movie.id}`}>
        <Overdrive id={movie.id}>
          <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}></img>
        </Overdrive>
      </Link>
    </MovieCard>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}

export default Movie;

export const MovieCard = styled.div`
  margin: 2em;
  height: auto;
  width: 300px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;