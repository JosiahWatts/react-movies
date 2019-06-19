import React, { Component } from 'react';
import styled from 'styled-components';

import Movie from './Movie';

import './App.css';

class MoviesList extends Component {
  
  state = {
    movies: []
  }

  async componentDidMount(){
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=5e8ac49e65e1984aba33756da5c29672&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(e){
      console.log(e);
    }
  }

  render() {
    return (
      <MovieContainer> 
        {this.state.movies.map( movie => <Movie key={movie.id} movie={movie} overview={movie.overview} /> )}
      </MovieContainer>   
    );
  }
}

export default MoviesList;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;