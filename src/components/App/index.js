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
        <Menu/>
      </div>
    );
  }
}

export default App;
