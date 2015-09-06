import React from 'react';
import { RouteHandler, Link } from 'react-router';
import SignInOrOut from './SignInOrOut.js';

export default class App extends React.Component{
  static contextTypes = {
    router: React.PropTypes.func
  }

  render() {
    return (
      <div>
        <SignInOrOut />
        <RouteHandler />
      </div>
    );
  }
};
