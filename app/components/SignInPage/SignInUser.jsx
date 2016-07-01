import React from 'react';
import TextField from 'material-ui/TextField';
import Headline from '../Reusable/Headline.jsx';

const styles = {
  floatingLabel: {
    color: 'white',
    top: 25,
    fontFamily: '"Open Sans", sans-serif'
  },
  textField: {
    width: '80%',
    maxWidth: 350,
    color: 'white'
  }
};

const SignInUser = ({ email, password, error, errorEmail, errorPassword, onEmailChange, onPasswordChange, onFormSubmit }) => (
  <section className="signin text-center text-white">
    <Headline value="Sign In" className="signin__title uppercase" />
    <form onSubmit={onFormSubmit} className="signin__form">
      <TextField
        id="Email"
        hintText="Enter Email"
        errorText={errorEmail}
        floatingLabelText="Email"
        onChange={onEmailChange}
        style={styles.textField}
        floatingLabelStyle={styles.floatingLabel}
        underlineStyle={{ borderColor: 'white' }}
        underlineFocusStyle={{ borderColor: 'white' }}
        errorStyle={{ color: 'white' }}
        value={email}
      />
      <TextField
        id="Password"
        hintText="Enter Password"
        errorText={errorPassword}
        floatingLabelText="Password"
        onChange={onPasswordChange}
        style={styles.textField}
        floatingLabelStyle={styles.floatingLabel}
        underlineStyle={{ borderColor: 'white' }}
        underlineFocusStyle={{ borderColor: 'white' }}
        errorStyle={{ color: 'white' }}
        value={password}
        type="password"
      />
      <button type="submit" className="btn btn-rect--hover bg-white text-red">
        Sign in
      </button>
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

export default SignInUser;
