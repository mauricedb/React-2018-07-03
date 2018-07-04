import React, { Component } from 'react';

class ControlPanel extends Component {
  fetchNedryQuotes = () => {
    this.props.fetchQuotes('nerdy');
  };

  fetchExplicitQuptes = () => {
    this.props.fetchQuotes('explicit');
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchNedryQuotes}>Load nerdy quotes</button>
        <button onClick={this.fetchExplicitQuptes}>Load explicit quotes</button>
      </div>
    );
  }
}

export default ControlPanel;
