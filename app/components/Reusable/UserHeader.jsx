import React from 'react';
import classNames from 'classnames/bind';
import UserMenu from './UserMenu.jsx';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'UserHeader';
    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(e) {
    if (!e.target.classList.contains('user-name') && !e.target.classList.contains('header-menu')) {
      this.setState({
        showMenu: false
      });
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
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
        <div className={`user-name ${UserInfoContainerClass}`} onClick={this.toggleMenu}>
          {name}
        </div>
        <UserMenu showMenu={this.state.showMenu} />
      </div>
    );
  }
}

module.exports = UserHeader;
