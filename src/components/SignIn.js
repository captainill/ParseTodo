import React from 'react';
import { Link } from 'react-router';
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

class SignIn extends React.Component{

  constructor(props){
		super(props);

    this.state = {
      error: null,
      signup: false
    }

    this.submitForm = this.submitForm.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  render() {
    let logoutBtn = null;
    if (Parse.User.current()) {
      logoutBtn =  (
        <div>
          <a className='logOut' onClick={this.logOut}>
            <svg viewBox='0 0 60 60'>
              <path d="M0,0 L30,0 L30,10 L10,10 L10,50 L30,50 L30,60 L0,60 Z"></path>
              <path d="M20,23 L40,23 L40,10 L60,30 L40,50 L40,37 L20,37 Z"></path>
            </svg>
          </a>
          <p>You are logged in. You can log out above.</p>
          <p>View your todos <Link to="list">here</Link></p>
        </div>
      );
    }
    return (
      <div>
        { logoutBtn }
        <h1>Sign in</h1>
        <form onKeyDown={this.keyDown}>
          <p><input ref="username" name="username" placeholder="Enter username" defaultValue="admin"/></p>
          <p>
            <input ref="password" name="password" type="password" defaultValue="pass"/>
            {' (hint: password)'}
          </p>
          <div className='row centered'>
            <a className='button' onClick={this.submitForm}>
              {this.state.signup ? 'Sign up' : 'Log in'}
            </a>
          </div>
          <div className='row centered'>
            or&nbsp;
            <a onClick={this.toggleSignup}>
              {this.state.signup ? 'log in' : 'sign up'}
            </a>
          </div>
        </form>
        {
          this.state.error ?
          <div className='row centered errors'>{this.state.error}</div> :
          null
        }
      </div>
    );
  }

  submitForm() {
    var self = this;
    var username = React.findDOMNode(this.refs.username).value;
    var password = React.findDOMNode(this.refs.password).value;
    if (username.length && password.length) {
      if (this.state.signup) {
        console.log('signup');
        var u = new Parse.User({
          username: username,
          password: password
        });
        u.signUp().then(function() {
          console.log('signup success!')
          self.context.router.transitionTo('list');
          // self.setState({
          //   error: null
          // });
        }, function() {
          console.log('signup error')
          self.setState({
            error: 'Invalid account information'
          });
        });
      } else {
        Parse.User.logIn(username, password).then(function() {
          console.log('login success')
          self.context.router.transitionTo('list');
          // self.setState({
          //   error: null
          // });
        }, function() {
          console.log('login error')
          self.setState({
            error: 'Incorrect username or password'
          });
        });
      }
    } else {
      this.setState({
        error: 'Please enter all fields'
      });
    }
  }


  toggleSignup() {
    this.setState({
      signup: !this.state.signup
    });
  }

  keyDown(e) {
    if (e.keyCode === 13) {
      this.submitForm();
    }
  }

  logOut() {
    Parse.User.logOut();
  }
};

SignIn.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default SignIn;
