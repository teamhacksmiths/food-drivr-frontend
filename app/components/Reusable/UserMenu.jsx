import React from 'react';
import { Link } from 'react-router';
import auth from '../../utils/auth.js';

class UserMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userRole: parseInt(localStorage.getItem('role'), 10) ? 1 : 0
    };
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
    this.props.onCloseMenu();
  }

  render() {
    return (
      <nav
        refs="userMenu"
        className="header-menu bg-white text-black text-right not-visible"
        onMouseLeave={this.props.onCloseMenu}
      >
        <div className="header-menu__arrow bg-white" />
        <Link
          to="/"
          className="header-menu__item"
          onClick={this.props.onCloseMenu}
        >
          Home
        </Link>
        {this.state.userRole === 1 ?
          ''
        :
          <Link
            to="/donation"
            className="header-menu__item"
            onClick={this.props.onCloseMenu}
          >
            Donate
          </Link>
        }
        <Link
          to="/profile"
          className="header-menu__item"
          onClick={this.props.onCloseMenu}
        >
          Settings
        </Link>
        <a
          className="header-menu__logout pointer-cursor"
          onClick={this.handleLogout}
        >
          Logout
        </a>
      </nav>
    );
  }
}

UserMenu.contextTypes = {
  router: React.PropTypes.object.isRequired
};

UserMenu.propTypes = {
  onOpenMenu: React.PropTypes.func.isRequired,
  onCloseMenu: React.PropTypes.func.isRequired,
};

export default UserMenu;
