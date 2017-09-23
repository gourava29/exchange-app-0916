// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './AdminLTE.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);