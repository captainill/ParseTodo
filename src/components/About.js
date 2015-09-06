import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class About extends React.Component{

  render() {
    return (
      <div className="event-wrap about">
      <p>About</p>
      <p>
        <Link to="event">Link to event</Link>
      </p>
      <p>
        <Link to="eventid" params={{id: 'e_1432519688931'}}>Link to with id</Link>
      </p>
      </div>
    );
  }

};
