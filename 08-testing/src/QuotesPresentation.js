import React, { Component } from 'react';
import propTypes from 'prop-types';
import SingleQuote from './SingleQuote';

class QuotesPresentation extends Component {
  static propTypes = {
    jokes: propTypes.array.isRequired,
    loading: propTypes.bool,
    error: propTypes.object
  };

  static defaultProps = {
    jokes: []
  };

  render() {
    const { jokes, loading, error } = this.props;

    if (loading) {
      return 'Loading';
    }

    if (error) {
      return <div style={{ color: 'red' }}>{error.message}</div>;
    }

    return (
      <div onClick={() => {}}>
        <h1>Chuck Norris Quotes.</h1>
        There are {jokes.length} jokes
        <ul>{jokes.map(joke => <SingleQuote key={joke.id} joke={joke} />)}</ul>
      </div>
    );
  }
}

export default QuotesPresentation;
