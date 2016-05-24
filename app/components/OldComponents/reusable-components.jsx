import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';


const TruckButton = () => (
	<div className="truck"></div>
);

const WhiteTruckButton = props => (
	<Link to="/">
		<div className="thankyou-truck"></div>
	</Link>
);

class UserMenu extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.displayName = 'UserMenu';
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout() {
		auth.logout()
			.then(() => {
				console.log("You have been logged out!");
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
			<div refs="userMenu" className={this.props.showMenu ? 'header-menu bg-white text-black text-right' : 'header-menu bg-white hidden'}>
				<div className="arrow bg-white" />
				<Link to="/" className="item">Dashboard</Link>
				<Link to="donation" className="item">Donate</Link>
				<Link to="/profile" className="item">Settings</Link>
				<a className="logout pointer-cursor" onClick={this.handleLogout}>Logout</a>
			</div>
		);
	}
}

UserMenu.propTypes = {
	showMenu: React.PropTypes.bool.isRequired
};

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
	toggleMenu() {
			this.setState({
				showMenu: !this.state.showMenu
			});
	}
	handleClick(e) {
		if (!e.target.classList.contains('user-name') && !e.target.classList.contains('header-menu')) {
			this.setState({
				showMenu: false
			});
		}
	}
	componentDidMount() {
	    document.addEventListener('click', this.handleClick);
	}
	componentWillUnmount() {
	    document.removeEventListener('click', this.handleClick);
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
					className={`user-name ${UserInfoContainerClass}`} onClick={this.toggleMenu}
				>
					{name}
				</div>
				<UserMenu showMenu={this.state.showMenu} />
			</div>
		);
	}
}


UserMenu.contextTypes = {
	router: React.PropTypes.object.isRequired
};

BackButton.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = {
	Header,
	Footer,
	Headline,
	ScrollDownButton,
	AppStoreIcon,
	WhiteTruckButton
};
