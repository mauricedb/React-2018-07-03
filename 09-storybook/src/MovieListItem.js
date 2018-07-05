import React, { Component } from 'react';

import './MovieListItem.css';

class MovieListItem extends Component {
  render() {
    const { title, poster_path, overview, vote_average } = this.props;
    return (
      <div>
        {title}
        <br />
        <img src={`//image.tmdb.org/t/p/w300${poster_path}`} />
        <br />
        {overview}
        <div className="vote-average">{vote_average}</div>
      </div>
    );
  }
}

export default MovieListItem;
