import React, { Component } from 'react';

import QuotesPresentation from './QuotesPresentation';
const url = 'http://api.icndb.com/jokes/random/10?limitTo=[nerdy]';

class Quotes extends Component {
  state = {
    jokes: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    fetch(url)
      .then(rsp => {
        if (rsp.ok) {
          return rsp.json();
        } else {
          Promise.reject({ message: rsp.statusMessage });
        }
      })
      .then(data => {
        const jokes = data.value;
        this.setState({ jokes, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err, loading: false });
      });
  }
  render() {
    // const { jokes } = this.state;

    // return <QuotesPresentation jokes={jokes} />;

    return <QuotesPresentation {...this.state} />;
  }
}

export default Quotes;
