import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  fullWidth: {
    width: '100%'
  },
  underlineYellow: {
    borderColor: '#F7B32B'
  },
  floatingLabelYellow: {
    color: '#F7B32B'
  },
  colorWhite: {
    color: 'white'
  }
};

const UserRegister = (props) => (
  <div className="signup text-center">
    <p>{props.userType} Sign Up</p>
    <form>
      <TextField
        hintText="Enter Name"
        errorText={props.errorName}
        floatingLabelText="Name"
        onChange={props.onNameChange}
        onKeyUp={props.onSubmitUser}
        style={styles.fullWidth}
        underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : ''}
        floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : ''}
        errorStyle={styles.colorWhite}
        value={props.name}
      />
        <br />
      <TextField
        hintText="Enter Email"
        errorText={props.errorEmail}
        floatingLabelText="Email"
        onChange={props.onEmailChange}
        onKeyUp={props.onSubmitUser}
        style={{ width: '80%', maxWidth: 350 }}
        errorStyle={{ color: 'white' }}
        value={props.email}
      />
        <br />
      <TextField
        hintText="8 or more characters."
        errorText={props.errorPassword}
        floatingLabelText="Password"
        onChange={props.onPasswordChange}
        onKeyUp={props.onSubmitUser}
        style={{ width: '80%', maxWidth: 350 }}
        errorStyle={{ color: 'white' }}
        value={props.password}
        type="password"
      />
        <br />
      <TextField
        hintText="8 or more characters."
        errorText={props.errorPasswordConfirmation}
        floatingLabelText="Password Confirmation"
        onChange={props.onPasswordConfirmChange}
        onKeyUp={props.onSubmitUser}
        style={{ width: '80%', maxWidth: 350 }}
        errorStyle={{ color: 'white' }}
        value={props.passwordConfirmation}
        type="password"
      />
        <br />
      <RaisedButton
        label="Sign Up"
        secondary
        onClick={props.onSubmitUser}
        style={{ marginTop: 100, minWidth: 250 }}
        backgroundColor={props.userType === 'Volunteer' ? 'rgb(247, 179, 43)' : ''}
      />
        <br />
      <span className="text-lightgrey">
        {props.error}
      </span>
    </form>
  </div>
);

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
