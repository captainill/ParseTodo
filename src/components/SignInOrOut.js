import React from 'react';
const Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
import ParseReact from 'parse-react';
import ParseComponent from 'parse-react/class';
import { Link } from'react-router';
import TodoList from './TodoList';

export default class SignInOrOut extends ParseComponent {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      signup: false
    };
  }

  observe() {
    return {
      user: ParseReact.currentUser
    };
  }

  render(){
    if (this.data.user) {
      return (
        <div>
          <a className='logOut' onClick={this.logOut}>
            <svg viewBox='0 0 60 60'>
              <path d="M0,0 L30,0 L30,10 L10,10 L10,50 L30,50 L30,60 L0,60 Z"></path>
              <path d="M20,23 L40,23 L40,10 L60,30 L40,50 L40,37 L20,37 Z"></path>
            </svg>
          </a>
          <TodoList />
        </div>
      );
    }
    return (
      <div>
        you are not logged in
      </div>
    )
  }
};
