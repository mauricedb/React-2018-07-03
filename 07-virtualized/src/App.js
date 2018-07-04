import React, { Component } from 'react';
import './App.css';

import SimpleGrid from './SimpleGrid';

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    const rowCount = 1000;
    const columnCount = 20;
    const data = Array.from(new Array(rowCount), () =>
      Array.from(new Array(columnCount), () => Math.round(1000 * Math.random()))
    );
    // console.table(data);
    this.setState({ data });
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <SimpleGrid data={data} />
      </div>
    );
  }
}

export default App;
