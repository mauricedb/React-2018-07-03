import React, { Component } from 'react';
import './App.css';

import SimpleGrid from './SimpleGrid';
import FastGrid from './FastGrid';

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    const rowCount = 1000000;
    const columnCount = 1000;
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
        {/* <SimpleGrid data={data} /> */}
        <FastGrid data={data} />
      </div>
    );
  }
}

export default App;
