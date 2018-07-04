import React, { Component } from 'react';

class SimpleGrid extends Component {
  render() {
    const { data } = this.props;

    if (data.length === 0) return null;
    
    return (
      <div>
        <div className="row">
          <div className="column header">&nbsp;</div>
          {data[0].map((column, i) => (
            <div key={i} className="column header">
              Col {i}
            </div>
          ))}
        </div>

        {data.map((row, index) => (
          <div key={index} className="row">
            <div className="row header">Row {index}</div>
            {row.map((column, i) => (
              <div key={i} className="column">
                {column}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default SimpleGrid;
