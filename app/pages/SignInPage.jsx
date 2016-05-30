import React from 'react';
import auth from '../utils/auth.js';
import SignInUser from '../components/SignInPage/SignInUser.jsx';
import CircularProgress from 'material-ui/CircularProgress';

class SignInPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: '',
      email: '',
      password: ''
    };
    this.history = props.history;
    this.showSessionMsg = props.location.query ? props.location.query.session : true;
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.state.errorEmail = '';
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!e.target.value) {
      this.state.errorEmail = 'This field is required.';
    } else if (!re.test(e.target.value)) {
      this.state.errorEmail = 'Email is not valid.';
    }
    this.setState({
      errorEmail: this.state.errorEmail,
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.state.errorPassword = '';
    if (!e.target.value) {
      this.state.errorPassword = 'This field is required.';
    } else if (e.target.value.length < 8) {
      this.state.errorPassword = 'Password needs more than 8 characters.';
    }
    this.setState({
      errorPassword: this.state.errorPassword,
      password: e.target.value
    });
  }

  formSubmit(e) {
    if (e.keyCode === 13 || e.button === 0) {
      const { errorPassword, errorEmail, email, password } = this.state;
      e.preventDefault();
      if (errorPassword === '' && errorEmail === '') {
        this.setState({ error: <CircularProgress /> });
        auth.login(email, password)
        .then((response) => {
          console.log('hello from login');
          console.log(response);
          localStorage.setItem('token', response.data.authtoken.auth_token);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          return auth.getUser();
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.user.role_id);
          localStorage.setItem('role', response.data.user.role_id);
          localStorage.setItem('name', response.data.user.name);
          const role = localStorage.getItem('role');
          if (auth.loggedIn() && parseInt(role, 10) !== 1) {
            this.context.router.push('/donation');
            auth.onChange(true);
          } else {
            this.context.router.push('/thankyou?userType=volunteer');
            auth.onChange(true);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.status >= 400 && err.status <= 500) {
            this.setState({ error: 'Login Failed' });
          }
        });
      } else {
        this.setState({ error: 'Can not send request.' });
      }
    }
  }

  render() {
    const { errorPassword, errorEmail, email, password, error } = this.state;
    return (
      <SignInUser
        email={email}
        password={password}
        error={error}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onFormSubmit={this.formSubmit}
      />
    );
  }
}

SignInPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = SignInPage;
