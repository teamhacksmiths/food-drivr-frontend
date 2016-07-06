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
        localStorage.setItem('token', response.data.authtoken.auth_token);
        auth.onChange(true);
      })
      .catch((err) => {
        console.log(err);
        auth.onChange(false);
        localStorage.clear();
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
    const path = window.location.pathname;

    if (path === '/donation' || path === '/profile') {
      headerButton = <TruckButton />;
    } else if (path === '/thankyou') {
      headerButton = '';
    } else if (path !== '/') {
      headerButton = <BackButton />;
    }

    if (path === '/thankyou' ||
        path.indexOf('/signup') > -1 ||
        path === '/signin' ||
        path === '/error' ||
        validRoutes.indexOf(path) === -1
    ) {
      logInButton = '';
    } else if (this.state.loggedIn || path === '/donation') {
      logInButton = <UserHeader />;
    }
    return (
      <header
        className={path === '/donation' ?
          'header header--donation bg-grey-x-light'
        :
          'header'
        }
      >
        {headerButton}
        {logInButton}
      </header>
    );
  }
}

export default Header;
