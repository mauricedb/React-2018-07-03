import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import Greeter from './Greeter';

class App extends React.Component {
  public render() {
    let x = 1;
    x++;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Greeter firstName="Maurice" />
        <Greeter firstName={x} />
        <Greeter />
      </div>
    );
  }
}

export default App;
