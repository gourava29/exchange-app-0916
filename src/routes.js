// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';

window.auth = {
	isLoggedIn: false
}
function requireAuth(nextState, replaceState) {
  // if (!window.auth.isLoggedIn)
  //   replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

const Routes = (props) => (
  <Router {...props} history={browserHistory}>
  	<Route path="/">
  		<IndexRoute component={Login}/>
  		<Route path="dashboard" component={App} onEnter={requireAuth} />
  		<Route path="login" component={Login} />
    	<Route path="signup" component={Signup} />
    	<Route path="*" component={NotFound} />
  	</Route>
    
  </Router>
);

export default Routes;