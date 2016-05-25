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
  <section className="signup text-center">
    <h1 className="uppercase text-white">{props.userType} Sign Up</h1>
    <form autoComplete="off" className={props.userType === 'Volunteer' ? 'volunteer' : 'donor'}>
      <TextField
        hintText="Enter Name"
        errorText={props.errorName}
        floatingLabelText="Name"
        onChange={props.onNameChange}
        onKeyUp={props.onSubmitUser}
        style={styles.fullWidth}
        underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : {}}
        floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : {}}
        errorStyle={styles.colorWhite}
        value={props.name}
      />
      <TextField
        hintText="Enter Email"
        errorText={props.errorEmail}
        floatingLabelText="Email"
        onChange={props.onEmailChange}
        onKeyUp={props.onSubmitUser}
        style={styles.fullWidth}
        underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : {}}
        floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : {}}
        errorStyle={styles.colorWhite}
        value={props.email}
      />
      <TextField
        hintText="8 or more characters."
        errorText={props.errorPassword}
        floatingLabelText="Password"
        onChange={props.onPasswordChange}
        onKeyUp={props.onSubmitUser}
        style={styles.fullWidth}
        underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : {}}
        floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : {}}
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
        style={styles.fullWidth}
        underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : {}}
        floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : {}}
        errorStyle={styles.colorWhite}
        value={props.passwordConfirmation}
        type="password"
      />
      <RaisedButton
        label="Sign Up"
        labelColor="white"
        onClick={props.onSubmitUser}
        style={{ marginTop: 100, minWidth: 250 }}
        backgroundColor={props.userType === 'Volunteer' ? '#f7b32b' : '#14cfe8'}
      />
      <h4 className="text-white">
        {props.error}
      </h4>
    </form>
  </section>
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
