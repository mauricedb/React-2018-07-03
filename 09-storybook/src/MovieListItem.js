import React, { Component } from 'react';

import './MovieListItem.css';

class MovieListItem extends Component {
  render() {
    const { title, poster_path, overview, vote_average } = this.props;
    return (
      <div>
        <h2> {title}</h2>
        <br />
        <img src={`//image.tmdb.org/t/p/w300${poster_path}`} />
        <br />
        <p>{overview}</p>
        <div className="vote-average">{vote_average}</div>
      </div>
    );
  }
}

export default MovieListItem;
