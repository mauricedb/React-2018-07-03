import React, { Component } from 'react';

import { Grid } from 'react-virtualized';

class FastGrid extends Component {
  cellRenderer = e => {
    // console.log('cellRender');

    const { data } = this.props;

    if (e.rowIndex === 0) {
      return (
        <div key={e.key} style={e.style}>
          Column {e.columnIndex}
        </div>
      );
    }

    if (e.columnIndex === 0) {
      return (
        <div key={e.key} style={e.style}>
          Row {e.rowIndex}
        </div>
      );
    }

    if (e.isScrolling) {
      return (
        <div key={e.key} style={e.style}>
          ...
        </div>
      );
    }

    const value = data[e.rowIndex - 1][e.columnIndex - 1];
    let className = 'small';
    if (value > 100) {
      className = 'large';
    }

    return (
      <div key={e.key} style={e.style} className={className}>
        {value}
      </div>
    );
  };

  render() {
    const { data } = this.props;

    if (data.length === 0) return null;

    return (
      <div>
        <Grid
          rowCount={data.length + 1}
          columnCount={data[0].length + 1}
          cellRenderer={this.cellRenderer}
          columnWidth={100}
          rowHeight={25}
          height={window.innerHeight}
          width={window.innerWidth}
        />
      </div>
    );
  }
}

export default FastGrid;
