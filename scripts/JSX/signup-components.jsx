import { Headline } from './reusable-components.jsx';
import React from 'react';
import { Link } from 'react-router';
import messages from '../utils/messages';

var SignUpPage = React.createClass({
  render: function() {
    return (
      <div className="signup">
        { this.props.children || <SignUpContainer /> }
      </div>
    );
  }
});

var SignUpContainer = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <Headline
          value={ messages.HEADLINE_SIGNUP_AS }
        />
        <SignUpButton />
      </div>
    );
  }
});

var SignUpButton = React.createClass({
  render: function() {
    return (
      <div>
        <Link
          to="/signup/donor"
          role="button"
          className='btn btn-info'
        >
        { messages.DONOR }
      </Link>
        <Link
          to="/signup/volunteer"
          role="button"
          className="btn btn-info"
        >
        { messages.DRIVER }
      </Link>
      </div>
    );
  }
});

module.exports = SignUpPage;
