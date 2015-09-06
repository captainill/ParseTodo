import React from 'react';
import {Route, Redirect, DefaultRoute, NotFoundRoute} from 'react-router';

module.exports = (
  <Route path="/" handler={require('./components/App.js')}>
    <Route name="list" handler={require('./components/TodoList.js')}/>
    <Route name="signin" handler={require('./components/SignIn.js')}/>
    <Route name="about" handler={require('./components/About.js')}/>
    <Redirect from="/" to="list" />
    <NotFoundRoute name="not-found" handler={require('./components/NotFound.js')}/>
  </Route>
);
