import React from 'react';
import TextField from 'material-ui/TextField';
import classNames from 'classnames/bind';

const styles = {
  textField: {
    width: '90%',
    maxWidth: 350,
    marginBottom: 10
  },
  floatingLabel: {
    color: 'white',
    top: 25,
    fontFamily: '"Open Sans", sans-serif'
  },
  colorWhite: {
    color: 'white'
  }
};

const UserRegister = (props) => {
  const btnClass = classNames({
    'btn btn-rect-hover bg-white': true,
    'text-blue-light': props.userType === 'Volunteer',
    'text-yellow': props.userType === 'Donor'
  });
  const formClass = classNames({
    signup__form: true,
    'signup__form--volunteer': props.userType === 'Volunteer',
    'signup__form--dono': props.userType === 'Donor'
  });
  return (
      <section className="signup text-center">
        <h1 className="signup__title uppercase text-white">{props.userType} Sign Up</h1>
        <form autoComplete="off" className={formClass}>
          <TextField
            hintText="Enter Name"
            errorText={props.errorName}
            floatingLabelText="Name"
            onChange={props.onNameChange}
            onKeyUp={props.onSubmitUser}
            style={styles.textField}
            floatingLabelStyle={styles.floatingLabel}
            underlineStyle={{ borderColor: 'white' }}
            underlineFocusStyle={{ borderColor: 'white' }}
            errorStyle={styles.colorWhite}
            value={props.name}
          />
          <TextField
            hintText="Enter Email"
            errorText={props.errorEmail}
            floatingLabelText="Email"
            onChange={props.onEmailChange}
            onKeyUp={props.onSubmitUser}
            style={styles.textField}
            floatingLabelStyle={styles.floatingLabel}
            underlineStyle={{ borderColor: 'white' }}
            underlineFocusStyle={{ borderColor: 'white' }}
            errorStyle={styles.colorWhite}
            value={props.email}
          />
          <TextField
            hintText="8 or more characters."
            errorText={props.errorPassword}
            floatingLabelText="Password"
            onChange={props.onPasswordChange}
            onKeyUp={props.onSubmitUser}
            style={styles.textField}
            floatingLabelStyle={styles.floatingLabel}
            underlineStyle={{ borderColor: 'white' }}
            underlineFocusStyle={{ borderColor: 'white' }}
            errorStyle={styles.colorWhite}
            value={props.password}
            type="password"
          />
          <TextField
            hintText="8 or more characters."
            errorText={props.errorPasswordConfirmation}
            floatingLabelText="Password Confirmation"
            onChange={props.onPasswordConfirmChange}
            onKeyUp={props.onSubmitUser}
            style={styles.textField}
            floatingLabelStyle={styles.floatingLabel}
            underlineStyle={{ borderColor: 'white' }}
            underlineFocusStyle={{ borderColor: 'white' }}
            errorStyle={styles.colorWhite}
            value={props.passwordConfirmation}
            type="password"
          />
          <button className={btnClass} onClick={props.onSubmitUser}>
            Sign up
          </button>
          <h4 className="text-white">
            {props.error}
          </h4>
        </form>
      </section>
  );
};

UserRegister.propTypes = {
  onNameChange: React.PropTypes.func.isRequired,
  onValidateEmail: React.PropTypes.func.isRequired,
  onEmailChange: React.PropTypes.func.isRequired,
  onPasswordChange: React.PropTypes.func.isRequired,
  onPasswordConfirmChange: React.PropTypes.func.isRequired,
  onSubmitUser: React.PropTypes.func.isRequired,
  userType: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  passwordConfirmation: React.PropTypes.string.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  errorName: React.PropTypes.string,
  errorEmail: React.PropTypes.string,
  errorPassword: React.PropTypes.string,
  errorPasswordConfirmation: React.PropTypes.string
};

export default UserRegister;
