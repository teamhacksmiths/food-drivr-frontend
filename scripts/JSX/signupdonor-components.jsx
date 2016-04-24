import { Headline } from './reusable-components.jsx';
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { PropTypes } from 'react';


function SignUpDonor(props) {
    return (
        <div className='container'>
        <Headline value="Sign Up as a Donor" />
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input 
              type="text"
              required
              placeholder="Name"
              id="signup-name"
              className="form-control"
              onChange={props.onNameChange}
              value={props.name}
            />
          </div>
          <div className="form-group">
            <input 
              type="email"
              required
              placeholder="Email"
              id="signup-email"
              className="form-control"
              onChange={props.onEmailChange}
              value={props.email}
            />
          </div>
          <div className="form-group">
            <input 
              type="password"
              required
              placeholder="Password"
              id="signup-password"
              className="form-control"
              onChange={props.onPasswordChange}
              value={props.password}
            />
          </div>
          <div className="form-group">
            <input 
              type="password"
              required
              placeholder="Password Confirmation"
              id="signup-password"
              className="form-control"
              onChange={props.onPasswordConfirmChange}
              value={props.passwordConfirmation}
            />
          </div>
          <span className="text-center">
            <button
                className='btn btn-info'
                type='submit'>
                  Register
            </button>
          </span>
        </form>
      </div>
    );
}

SignUpDonor.propTypes = {
    onSubmitUser: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onPasswordConfirmChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirmation: PropTypes.string.isRequired,
}

module.exports = SignUpDonor;
