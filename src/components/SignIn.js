import React from 'react';

export default class SignIn extends React.Component{

  constructor(props){
		super(props);

    this.state = {
      error: null
    }
  }

  static contextTypes = {
    router: React.PropTypes.func
  }

  static willTransitionTo(transition, params, query) {
    console.log('transition', transition, params, query);
    // var isAuthenticated = transition.context
    //   .getActionContext().getStore(AuthStore).isAuthenticated();
    //
    // if (isAuthenticated) {
    //   transition.redirect('/contacts');
    // }
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <form>
          <p><input ref="email" name="email" placeholder="Enter email" defaultValue="admin-test@test.com"/></p>
          <p>
            <input ref="password" name="password" type="password" placeholder="password"/>
            {' (hint: admin-test)'}
          </p>
          <p>{this.renderButton()}</p>
        </form>
        {this.renderError()}
      </div>
    );
  }

  renderButton() {
    var disabled;
    var text = 'Sign in';

    return (
      <button
        type="submit"
        onClick={this.handleSignIn}
        disabled={disabled}>
        {text}
      </button>
    );
  }

  handleSignIn(e) {
    e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    // this.executeAction(signIn, {
    //   email: email,
    //   password: password
    // });
  }

  renderError() {
    var error = this.state.error;
    if (!error) {
      return null;
    }

    var text;
    if (error.name === 'BadCredentials') {
      text = 'Wrong email or password';
    }
    else {
      text = 'An error occured while signing in';
    }

    return <p style={{color: 'red'}}>{text}</p>;
  }
};
