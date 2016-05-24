import React from 'react';
import { Link } from 'react-router';
import auth from '../../utils/auth.js';

class UserMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.displayName = 'UserMenu';
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    auth.logout()
      .then(() => {
        console.log('You have been logged out!');
        localStorage.clear();
        auth.onChange(false);
        this.context.router.push('/');
      }).catch((err) => {
        console.log(err);
      });
    auth.onChange(false);
    localStorage.clear();
  }

  render() {
    return (
      <nav refs="userMenu" className={this.props.showMenu ? 'header-menu bg-white text-black text-right' : 'header-menu bg-white hidden'}>
        <div className="arrow bg-white" />
        <Link to="/" className="item">Dashboard</Link>
        <Link to="donation" className="item">Donate</Link>
        <Link to="/profile" className="item">Settings</Link>
        <a className="logout pointer-cursor" onClick={this.handleLogout}>Logout</a>
     </nav>
    );
  }
}

UserMenu.contextTypes = {
  router: React.PropTypes.object.isRequired
};

UserMenu.propTypes = {
  showMenu: React.PropTypes.bool.isRequired
};

module.exports = UserMenu;
