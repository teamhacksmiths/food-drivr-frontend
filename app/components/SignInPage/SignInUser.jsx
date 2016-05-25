import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Headline from '../Reusable/Headline.jsx';

const SignInUser = ({ email, password, error, errorEmail, errorPassword, onEmailChange, onPasswordChange, onFormSubmit }) => (
  <section className="signin text-center text-white">
    <Headline value="Sign In" className="signin__title" />
    <form className="signin__form">
      <TextField
        hintText="Enter Email"
        floatingLabelStyle={{ color: 'white' }}
        errorText={errorEmail}
        floatingLabelText="Email"
        onChange={onEmailChange}
        onKeyUp={onFormSubmit}
        style={{ width: '80%', maxWidth: 350 }}
        floatingLabelStyle={{ color: 'white', top: 25, fontFamily: '"Open Sans", sans-serif' }}
        underlineStyle={{ borderColor: 'white' }}
        errorStyle={{ color: 'white' }}
        value={email}
      />
      <TextField
        hintText="Enter Password"
        floatingLabelStyle={{ color: 'white' }}
        errorText={errorPassword}
        floatingLabelText="Password"
        onChange={onPasswordChange}
        onKeyUp={onFormSubmit}
        style={{ width: '80%', maxWidth: 350 }}
        floatingLabelStyle={{ color: 'white', top: 25, fontFamily: '"Open Sans", sans-serif' }}
        underlineStyle={{ borderColor: 'white' }}
        errorStyle={{ color: 'white' }}
        value={password}
        type="password"
      />
      <RaisedButton
        label="Sign In"
        labelColor="white"
        onClick={onFormSubmit}
        style={{ color: 'white', marginBottom: 20, width: 350, borderBottom: '1px solid white', boxShadow: 'none', backgroundColor: 'transparent' }}
        labelStyle={{ fontFamily: '"Open Sans", sans-serif', fontSize: 20, position: 'absolute', width: '100%', left: 0, top: 11 }}
        className="signin__btn"
        backgroundColor="transparent"
      />
      <span>
        {error}
      </span>
    </form>
  </section>
);

SignInUser.propTypes = {
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  errorEmail: React.PropTypes.string,
  errorPassword: React.PropTypes.string,
  onEmailChange: React.PropTypes.func.isRequired,
  onPasswordChange: React.PropTypes.func.isRequired,
  onFormSubmit: React.PropTypes.func.isRequired
};

module.exports = SignInUser;
