import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
        <Button onClick={this.fetchNedryQuotes}>Load nerdy quotes</Button>
        <Button onClick={this.fetchExplicitQuptes}>Load explicit quotes</Button>
      </div>
    );
  }
}

export default ControlPanel;
