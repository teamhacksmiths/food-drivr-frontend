import {Headline} from './reusable-components.jsx';
import React from 'react';
import {Link} from 'react-router';

var SignInPage = React.createClass({
  render: function(){
    return (
      <div className="signin">
        <div className="container">
          <Headline value="Sign In" />
          <SignInForm />
        </div>
      </div>
    );
	}
});

var SignInForm = React.createClass({
  getInitialState: function(){
    return {
      user: '',
      password: '',
    }
  },
  render: function(){
    return (
      <form action="">
        <div className="form-group">
          <input type="email" placeholder="Email" id="signup-email" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" id="signup-password" className="form-control"/>
        </div>
        <p className="text-center">
          <SignInButton />
        </p>
      </form>
    );
  }
});

var SignInButton = React.createClass({
  render: function(){
    return (
      <Link to="/donation" role="button" className='btn btn-info'>Enter</Link>
    );
  }
});

module.exports = SignInPage;
