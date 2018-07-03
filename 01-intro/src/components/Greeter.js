import React from 'react';
import './greeter.css';

class Greeter extends React.Component {
  static displayName = 'Greeter';
  render() {
    const { name } = this.props;

    return <div className="greeter">Hello {name || 'world'}</div>;
  }
}

export default Greeter;
