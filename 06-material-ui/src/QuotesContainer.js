import React, { Component, Fragment } from 'react';

import ControlPanel from './ControlPanel';
import QuotesPresentation from './QuotesPresentation';

class Quotes extends Component {
  state = {
    jokes: [],
    loading: false,
    error: null
  };

  fetchQuotes = category => {
    this.setState({ loading: true });
    fetch(`http://api.icndb.com/jokes/random/10?limitTo=[${category}]`)
      .then(rsp => {
        if (rsp.ok) {
          return rsp.json();
        } else {
          return Promise.reject({ message: rsp.statusMessage });
        }
      })
      .then(data => {
        this.setState(oldState => ({
          jokes: data.value,
          loading: false
        }));
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    return (
      <Fragment>
        <ControlPanel fetchQuotes={this.fetchQuotes} />
        <QuotesPresentation {...this.state} />
      </Fragment>
    );
  }
}

export default Quotes;
