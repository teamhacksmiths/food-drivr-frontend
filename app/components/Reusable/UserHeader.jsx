import React from 'react';
import classNames from 'classnames/bind';
import UserMenu from './UserMenu.jsx';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'UserHeader';
  }

  handleCloseMenu() {
    document.querySelector('.header-menu').classList.remove('visible');
    document.querySelector('.header-menu').classList.add('not-visible');
  }

  handleOpenMenu() {
    const menuIsNotVisible = document.querySelector('.header-menu').classList.contains('not-visible');
    if (menuIsNotVisible) {
      document.querySelector('.header-menu').classList.remove('not-visible');
      document.querySelector('.header-menu').classList.add('visible');
    }
  }

  render() {
    const UserHeaderClass = classNames({
      relative: true,
      'text-white': window.location.pathname === '/',
      'text-black': window.location.pathname !== '/'
    });
    const UserInfoContainerClass = classNames({
      'pointer-cursor': true,
      'text-yellow': window.location.pathname === '/donation'
    });
    const name = localStorage.getItem('name');
    return (
      <div className={UserHeaderClass}>
        <div
          className={`header__user-name ${UserInfoContainerClass}`}
          onMouseOver={this.handleOpenMenu}
        >
          {name}
        </div>
        <UserMenu
          onOpenMenu={this.handleOpenMenu}
          onCloseMenu={this.handleCloseMenu}
        />
      </div>
    );
  }
}

export default UserHeader;
