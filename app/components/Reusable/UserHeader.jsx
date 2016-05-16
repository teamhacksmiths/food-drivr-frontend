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

	handleClick(event) {
		if (event.target.className !== 'user-info' && event.target.className !== 'user-menu-container') {
			// hide the menu
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
			'user-container text-margin-left text-flex': true,
			'text-white': window.location.pathname === '/',
			'text-black': window.location.pathname !== '/',
			'donation-header-user': window.location.pathname === '/donation'
		});

		const UserInfoContainerClass = classNames({
			'text-flex pointer-cursor': true,
			'text-yellow': window.location.pathname === '/donation'
		});

		const name = localStorage.getItem('name');
		
		return (
			<div className={UserHeaderClass}>
				<div className={UserInfoContainerClass} onClick={this.toggleMenu}>
					<div className="user-info">{name}</div>
				</div>
				<UserMenu showMenu={this.state.showMenu} />
			</div>
		);
	}
}

module.exports = UserHeader;
