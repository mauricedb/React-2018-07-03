import React, { Component } from 'react';

import MovieListItem from './MovieListItem';

class MoviesList extends Component {
  render() {
    const { movies, error, loading } = this.props;

    if (loading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <div>
        <h2>Top rated movies</h2>
        <div>
          {movies.map(movie => <MovieListItem key={movie.id} {...movie} />)}
        </div>
      </div>
    );
  }
}

export default MoviesList;
