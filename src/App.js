import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  
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
      <div className="App">
        <header className="App-header">
          <h2>movies.</h2>
        </header>

        <div className="card-container">
        {this.state.movies.map( movie => <Movie key={movie.id} movie={movie} overview={movie.overview} /> )}
        </div>   
      </div>
    );
  }
}

export default App;
