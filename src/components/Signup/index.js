import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

export default class Signup extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  state = {}
  constructor(props) {
    super(props);
    this.onInputchange = this.onInputchange.bind(this);
    this.onFormEnter = this.onFormEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputchange(e) {
    var newState = {...this.state};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onFormEnter(event) {
    if(event.keyCode === 13) {
      this.handleSubmit();
      return false;
    }
  }

  handleSubmit() {
    if(this.state.username && this.state.email && this.state.password && this.state['confirm-password']){
      window.auth.isLoggedIn = true;
      this.props.router.push('/dashboard')
    } else {
      this.setState({...this.state, error: 'Please fill in the form'});
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
                    <div className="active" id="signup-form-link">Signup</div>
                  </div>
                </div>
                <hr/>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    <form id="register-form" onKeyDown={this.onFormEnter}>
                      <div className="form-group">
                        <input type="text" name="username" id="username" onChange={this.onInputchange} tabIndex="1" className="form-control" placeholder="Username" value={this.state.username}/>
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" id="email" tabIndex="1" onChange={this.onInputchange} className="form-control" placeholder="Email Address" value={this.state.email}/>
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" id="password" onChange={this.onInputchange} tabIndex="2" className="form-control" placeholder="Password" value={this.state.password}/>
                      </div>
                      <div className="form-group">
                        <input type="password" name="confirm-password" id="confirm-password" onChange={this.onInputchange} tabIndex="2" className="form-control" placeholder="Confirm Password" value={this.state['confirm-password']}/>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 col-sm-offset-3">
                            <input type="button" onClick={this.handleSubmit} name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-primary btn-register" value="Register Now"/>
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
                          <div className="col-sm-6 col-sm-offset-3 redirectLink">
                            <Link to="/login">Already a member login here!</Link>
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