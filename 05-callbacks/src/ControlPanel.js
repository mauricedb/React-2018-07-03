import React, { Component, PureComponent } from 'react';

class DemoPanel extends PureComponent {
  state = {
    category: ''
  };
  onCategoryChanged = e => {
    // console.log(e.target.value);
    this.setState({ category: e.target.value });
  };
  loadQuotes = () => {
    const { category } = this.state;
    const { fetchQuotes } = this.props;
    fetchQuotes(category);
  };
  render() {
    console.count('Render DemoPanel');
    const { fetchNedryQuotes, fetchExplicitQuptes } = this.props;
    const { category } = this.state;

    return (
      <div>
        <button onClick={fetchNedryQuotes}>Load nerdy quotes</button>
        <button onClick={fetchExplicitQuptes}>Load other quotes</button>
        <input type="text" value={category} onChange={this.onCategoryChanged} />
        <button onClick={this.loadQuotes} disabled={!category}>
          Load some quotes
        </button>
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
        fetchQuotes={fetchQuotes}
      />
    );
  }
}

export default ControlPanel;
