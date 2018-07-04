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
    fetch(`http://api.icndb.com/jokes/random/10?limitTo=[${category}]`)
      .then(rsp => {
        if (rsp.ok) {
          return rsp.json();
        } else {
          return Promise.reject({ message: rsp.statusMessage });
        }
      })
      .then(data => {
        // const jokes = data.value;
        // const {jokes} = this.state;
        // this.setState({ jokes: [...this.state.jokes, ...data.value], loading: false });

        this.setState(oldState => ({
          // jokes: [...oldState.jokes, ...data.value]
          jokes: data.value
        }));

        // this.state.jokes = this.state.jokes.concat(data.value);
        // this.forceUpdate();
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  // componentDidMount(){
  //   this.fetchMovies();
  // }

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
