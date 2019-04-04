import React from 'react';

// Destructure props so I don't have to use props.
const Movie = ({movie, key}) => {

  return (
    <div>
      <div key={movie.id} className="card">{movie.id}</div>
      <h3>{movie.title}</h3>
    </div>
  );

}

export default Movie;