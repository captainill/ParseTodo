import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component{

  static contextTypes = {
    router: React.PropTypes.func
  }

  render() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
};
