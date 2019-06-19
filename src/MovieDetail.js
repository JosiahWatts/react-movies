import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import { MovieCard } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w300';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  
  state = {
    movie: {}
  }

  async componentDidMount(){
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5e8ac49e65e1984aba33756da5c29672&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie
      })
    } catch(e){
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}></img>
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 40vh;
  background: url( ${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;

  > div {
    margin-left: 20px;

  }
  img {
    position: relative;
    top: -5rem;
  }
`;