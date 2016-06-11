import React from 'react';
import auth from '../utils/auth.js';
import SignInUser from '../components/SignInPage/SignInUser.jsx';
import CircularProgress from 'material-ui/CircularProgress';

class SignInPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: '',
      errorEmail: '',
      errorPassword: '',
      valueEmail: '',
      valuePassword: '',
    };
    this.history = props.history;
    this.showSessionMsg = props.location.query ? props.location.query.session : true;
    this.formSubmit = this.formSubmit.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }

  handleFormUpdate(e) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (e.target.id === 'Email') {
      if (!e.target.value) {
        this.state.errorEmail = 'This field is required.';
      } else if (!re.test(e.target.value)) {
        this.state.errorEmail = 'Email is not valid.';
      } else {
        this.state.errorEmail = '';
      }
    } else if (e.target.id === 'Password') {
      if (!e.target.value) {
        this.state.errorPassword = 'This field is required.';
      } else if (e.target.value.length < 8) {
        this.state.errorPassword = 'Password needs more than 8 characters.';
      } else {
        this.state.errorPassword = '';
      }
    }
    this.setState({
      [`value${e.target.id}`]: e.target.value,
      [`error${e.target.id}`]: eval(`this.state.error${e.target.id}`)
    });
  }

  formSubmit(e) {
    const { errorPassword, errorEmail, valueEmail, valuePassword } = this.state;
    e.preventDefault();
    if (errorPassword === '' && errorEmail === '') {
      this.setState({ error: <CircularProgress /> });
      auth.login(valueEmail, valuePassword)
      .then((response) => {
        console.log('hello from login');
        console.log(response);
        localStorage.setItem('token', response.data.authtoken.auth_token);
        localStorage.setItem('email', valueEmail);
        localStorage.setItem('password', valuePassword);
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

  render() {
    const { errorPassword, errorEmail, valueEmail, valuePassword, error } = this.state;
    return (
      <SignInUser
        email={valueEmail}
        password={valuePassword}
        error={error}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
        onEmailChange={this.handleFormUpdate}
        onPasswordChange={this.handleFormUpdate}
        onFormSubmit={this.formSubmit}
      />
    );
  }
}

SignInPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = SignInPage;
