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
    <h1 className="signup__title uppercase text-white">{props.userType} Sign Up</h1>
    <form autoComplete="off" className={props.userType === 'Volunteer' ? 'signup__form signup__form--volunteer' : 'signup__form signup__form--donor'}>
      <TextField
        hintText="Enter Name"
        errorText={props.errorName}
        floatingLabelText="Name"
        onChange={props.onNameChange}
        onKeyUp={props.onSubmitUser}
        style={styles.fullWidth}
        floatingLabelStyle={{ color: 'white', top: 25, fontFamily: '"Open Sans", sans-serif' }}
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
        style={styles.fullWidth}
        floatingLabelStyle={{ color: 'white', top: 25, fontFamily: '"Open Sans", sans-serif' }}
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
        style={styles.fullWidth}
        floatingLabelStyle={{ color: 'white', top: 25, fontFamily: '"Open Sans", sans-serif' }}
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
        style={styles.fullWidth}
        floatingLabelStyle={{ color: 'white', top: 25, fontFamily: '"Open Sans", sans-serif' }}
        underlineStyle={{ borderColor: 'white' }}
        underlineFocusStyle={{ borderColor: 'white' }}
        errorStyle={styles.colorWhite}
        value={props.passwordConfirmation}
        type="password"
      />
      <RaisedButton
        label="Sign Up"
        labelColor="white"
        onClick={props.onSubmitUser}
        style={{ color: 'white', marginBottom: 20, width: 350, borderBottom: '1px solid white', boxShadow: 'none', backgroundColor: 'transparent' }}
        labelStyle={{ fontFamily: '"Open Sans", sans-serif', fontSize: 20, position: 'absolute', width: '100%', left: 0, top: 11 }}
        backgroundColor="transparent"
        className="signup__btn"
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
