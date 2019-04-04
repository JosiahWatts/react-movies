import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2,
    title: 'Raiders'
  },
  {
    id: 3,
    title: 'Spider-Man'
  },
  {
    id: 4,
    title: 'Spider-Man 3'
  }
];

class App extends Component {
  
   render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>movies.</h2>
        </header>

        <div className="card-container">
        {movies.map( movie => <Movie key={movie.id} movie={movie} /> )}
        </div>   
      </div>
    );
  }
}

export default App;
