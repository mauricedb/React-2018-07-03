import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesLoader from './MoviesLoader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesLoader url="https://api.themoviedb.org/3/movie/top_rated?api_key=eb65eb0fd35b0dffbe34d74febb34589&language=en-US&page=1" />
      </div>
    );
  }
}

export default App;
