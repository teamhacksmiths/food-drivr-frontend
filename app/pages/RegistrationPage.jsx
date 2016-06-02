import React from 'react';
import UserRegister from '../components/RegistrationPage/UserRegister.jsx';
import auth from '../utils/auth.js';
import CircularProgress from 'material-ui/CircularProgress';

class Registration extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: '',
      userData: {},
      authToken: '',
      user: {},
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }

  handleNameChange(e) {
    this.state.errorName = '';

    if (!e.target.value) {
      this.state.errorName = 'This field is required.';
    } else if (e.target.value < 3) {
      this.state.errorName = 'Name needs more than 3 characters.';
    }
    this.setState({
      errorName: this.state.errorName,
      name: e.target.value
    });
  }

  validateEmail(email) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
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
      this.state.errorPassword = 'Passwords need more than 8 characters.';
    }
    this.setState({
      errorPassword: this.state.errorPassword,
      password: e.target.value
    });
  }

  handlePasswordConfirmChange(e) {
    this.state.errorPasswordConfirmation = '';
    if (!e.target.value) {
      this.state.errorPasswordConfirmation = 'This field is required.';
    } else if (e.target.value.length < 8) {
      this.state.errorPasswordConfirmation = 'Passwords need more than 8 characters.';
    } else if (e.target.value !== this.state.password) {
      this.state.errorPasswordConfirmation = 'Passwords must match!';
    }
    this.setState({
      errorPasswordConfirmation: this.state.errorPasswordConfirmation,
      passwordConfirmation: e.target.value
    });
  }

  handleSubmitUser(e) {
    console.log(this.props.route.header);
    const { name, email, password, passwordConfirmation } = this.state;
    const userRole = this.props.route.header === 'Donor' ? 0 : 1;
    e.preventDefault();
    if (this.state.errorName === '' &&
      this.state.errorPassword === '' &&
      this.state.errorEmail === '' &&
      this.state.errorPasswordConfirmation === '') {
      this.setState({ error: <CircularProgress /> });
      auth.register(name, email, password, passwordConfirmation, userRole)
      .then((response) => {
        console.log('hello from register');
        console.log(response.data);
        console.log(response.status);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        const role = localStorage.setItem('role', userRole);
        if (parseInt(role, 10) !== 1) {
          this.context.router.push('/thankyou');
        }
      })
      .catch((err) => {
        if (err.status >= 400 && err.status <= 500) {
          console.log(err);
          this.setState({ error: 'Registration Failed' });
        }
      });
    } else {
      this.setState({ error: 'Can not send request.' });
    }
  }

  render() {
    const {
      name,
      errorName,
      email,
      errorEmail,
      password,
      errorPassword,
      passwordConfirmation,
      errorPasswordConfirmation,
      error
    } = this.state;
    return (
      <UserRegister
        onNameChange={this.handleNameChange}
        onValidateEmail={this.validateEmail}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onPasswordConfirmChange={this.handlePasswordConfirmChange}
        onSubmitUser={this.handleSubmitUser}
        userType={this.props.route.header}
        name={name}
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        errorName={errorName}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
        errorPasswordConfirmation={errorPasswordConfirmation}
        error={error}
      />
    );
  }
}

Registration.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = Registration;
