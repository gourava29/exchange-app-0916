import React, { Component } from 'react';
import classnames from 'classnames';
import Menu from '../Menu';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default App;
