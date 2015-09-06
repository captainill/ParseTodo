var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var SignInOrOut = require('./SignInOrOut.js');

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
