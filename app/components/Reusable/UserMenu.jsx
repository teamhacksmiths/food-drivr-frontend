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
			<div refs="userMenu" className={this.props.showMenu ? 'user-menu-container text-black' : 'user-menu-container hide-menu'}>
				<div className="user-menu-arrow" />
				<Link to="/" className="menu-item">Dashboard</Link>
				<Link to="donation" className="menu-item">Donate</Link>
				<Link to="/profile" className="menu-item">Settings</Link>
				<a className="logout" onClick={this.handleLogout}>Logout</a>
			</div>
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
