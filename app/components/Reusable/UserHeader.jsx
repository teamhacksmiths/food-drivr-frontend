import React from 'react';
import classNames from 'classnames/bind';
import UserMenu from './UserMenu.jsx';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'UserHeader';
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
        <div className={`header__user-name ${UserInfoContainerClass}`}>
          {name}
        </div>
        <UserMenu />
      </div>
    );
  }
}

export default UserHeader;
