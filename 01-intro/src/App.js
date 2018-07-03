import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greeter from './components/Greeter';

class App extends React.Component {
  static displayName = 'App';
  render() {
    const city = 'Herrenberg';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Greeter name="world" />
        <Greeter name="Maurice" />
        <Greeter name={city} />
        <Greeter name={'Maurice in ' + city} />
        <Greeter
          name={`Maurice in ${city} at ${new Date().toLocaleTimeString()}`}
        />
        <Greeter />
      </div>
    );
  }
}

export default App;
