import React, { Component, PureComponent } from 'react';

class DemoPanel extends PureComponent {
  render() {
    console.count('Render DemoPanel');
    const { fetchNedryQuotes, fetchExplicitQuptes } = this.props;
    return (
      <div>
        <button onClick={fetchNedryQuotes}>Load nerdy quotes</button>
        <button onClick={fetchExplicitQuptes}>Load other quotes</button>
      </div>
    );
  }
}

class ControlPanel extends Component {
  fetchNedryQuotes = () => {
    this.props.fetchQuotes('nerdy');
  };

  fetchExplicitQuptes = () => {
    this.props.fetchQuotes('explicit');
  };
  render() {
    const { fetchQuotes } = this.props;
    return (
      <DemoPanel
        fetchNedryQuotes={this.fetchNedryQuotes}
        fetchExplicitQuptes={this.fetchExplicitQuptes}
      />
    );
  }
}

export default ControlPanel;
