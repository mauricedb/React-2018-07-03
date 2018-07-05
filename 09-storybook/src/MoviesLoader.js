import React, { Component } from 'react';

import MoviesList from './MoviesList';

class MoviesLoader extends Component {
  state = {
    movies: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const { url } = this.props;
      const rsp = await fetch(url);

      if (rsp.ok) {
        const data = await rsp.json();
        this.setState({ movies: data.results });
      } else {
        this.setState({ error: { message: rsp.statusText } });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <MoviesList {...this.state} />;
  }
}

export default MoviesLoader;
