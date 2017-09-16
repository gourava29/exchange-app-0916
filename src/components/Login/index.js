import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

export default class Login extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  state = {}
  constructor(props) {
    super(props);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFormEnter = this.onFormEnter.bind(this);
  }

  onUserNameChange(e) {
    this.setState({
      ...this.state,
      username: e.target.value
    });
  }

  onPasswordChange(e) {
    this.setState({
      ...this.state,
      password: e.target.value
    });
  }

  onFormEnter(event) {
    if(event.keyCode === 13) {
      this.handleSubmit();
      return false;
    }
  }

  handleSubmit() {
    if(this.state.username === 'admin' && this.state.password === 'admin123'){
      window.auth.isLoggedIn = true;
      this.props.router.push('/dashboard')
    } else {
      this.setState({...this.state, error: 'Invalid Username/Password'});
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-login">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="active" id="login-form-link">Login</div>
                  </div>
                </div>
                <hr/>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    <form id="login-form" onKeyDown={this.onFormEnter}>
                      <div className="form-group">
                        <input type="text" name="username" value={this.state.username} onChange={this.onUserNameChange} id="username" tabIndex="1" className="form-control" placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" value={this.state.password} id="password" onChange={this.onPasswordChange} tabIndex="2" className="form-control" placeholder="Password"/>
                      </div>
                      <div className="form-group text-center">
                        <input type="checkbox" tabIndex="3" className="" name="remember" id="remember"/>
                        <label htmlFor="remember"> Remember Me</label>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 col-sm-offset-3">
                            <input type="button" onClick={this.handleSubmit} name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-primary btn-login" value="Log In"/>
                          </div>
                        </div>
                      </div>
                      {
                        this.state.error && 
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="text-center">
                                <div className="login-error">{this.state.error}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                      <div className="form-group">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="text-center">
                              <a href="https://phpoll.com/recover" tabIndex="5" className="forgot-password">Forgot Password?</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 col-sm-offset-3 redirectLink">
                            <Link to="/signup">Not a member Signup here!</Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}