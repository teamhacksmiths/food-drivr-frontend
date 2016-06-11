import React from 'react';
import auth from '../../utils/auth.js';
import AppStoreIcon from './AppStoreIcon.jsx';
import Login from './Login.jsx';
import BackButton from './BackButton.jsx';
import UserHeader from './UserHeader.jsx';
import TruckButton from './TruckButton.jsx';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: auth.loggedIn()
    };
    this.updateAuth = this.updateAuth.bind(this);
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
    const email = localStorage.getItem('email');
    const pass = localStorage.getItem('password');
    if (this.state.loggedIn === true) {
      auth.login(email, pass)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.authtoken.auth_token);
        auth.onChange(true);
      })
      .catch((err) => {
        console.log(err);
        auth.onChange(false);
      });
    }
  }

  updateAuth(loggedIn) {
    this.setState({ loggedIn });
  }

  render() {
    let headerButton = <AppStoreIcon />;
    let logInButton = <Login />;
    const validRoutes = ['/donation', '/profile', '/'];
    const winlo = window.location.pathname;

    if (winlo === '/donation' || winlo === '/profile') {
      headerButton = <TruckButton />;
    } else if (winlo === '/thankyou') {
      headerButton = '';
    } else if (winlo !== '/') {
      headerButton = <BackButton />;
    }

    if (winlo === '/thankyou' || winlo.indexOf('/signup') > -1 || winlo === '/signin' || winlo === '/error' || validRoutes.indexOf(winlo) === -1) {
      logInButton = '';
    } else if (this.state.loggedIn || winlo === '/donation') {
      logInButton = <UserHeader />;
    }
    return (
      <header className={winlo === '/donation' ? 'header header--donation bg-grey-x-light' : 'header'}>
        {headerButton}
        {logInButton}
      </header>
    );
  }
}

module.exports = Header;
