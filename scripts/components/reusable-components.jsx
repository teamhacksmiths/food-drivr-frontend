import React from 'react';
import { Link } from 'react-router';
import auth from '../utils/auth.js';
import classNames from 'classnames/bind';

const Header = React.createClass({
	getInitialState() {
		return {
			loggedIn: auth.loggedIn()
		};
	},

	componentWillMount() {
		auth.onChange = this.updateAuth;
		if (this.state.loggedIn === true) {
			auth.login();
		}
	},

	updateAuth(loggedIn) {
		this.setState({ loggedIn });
	},

	render() {
		let headerButton = <AppStoreIcon />;
		if (window.location.pathname === '/donation') {
			headerButton = <TruckButton />;
		} else if (window.location.pathname !== '/') {
			headerButton = <BackButton />;
		}
		return (
			<div className={window.location.pathname === '/donation' ? 'donation-header text-flex' : 'header text-flex'}>
				{headerButton}
				{this.state.loggedIn || window.location.pathname === '/donation' ? <UserHeader /> : <Login />}
			</div>
		);
	}
});

const Headline = props => (
	<h1 className={props.className}>{props.value}</h1>
);

Headline.propTypes = {
	className: React.PropTypes.string,
	value: React.PropTypes.string.isRequired
};

class BackButton extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'BackButton';
		this.handleGoBack = this.handleGoBack.bind(this);
	}
	handleGoBack() {
		this.context.router.goBack();
	}
	render() {
		return (
			<div className="back-button" onClick={this.handleGoBack}></div>
		);
	}
}

const AppStoreIcon = props => (
	<Link to="" className={props.className}>
		<img src="images/App-Store-Badge.png" alt="apple store icon" />
	</Link>
);

AppStoreIcon.propTypes = {
	className: React.PropTypes.string
};

const TruckButton = props => (
	<div className="truck-button"></div>
);


const Login = props => (
		<h3 className="text-margin-left source-sans">
			<Link to="/signin" className="text-white">Login</Link>
		</h3>
);

const ScrollDownButton = props => (
	<div>
		<p>{props.text}</p>
		<img src={props.color === 'white' ? 'images/down-arrow.svg' : 'images/down-arrow-yellow.svg'} alt="down arrow" />
	</div>
);

ScrollDownButton.propTypes = {
	text: React.PropTypes.string.isRequired,
	color: React.PropTypes.string.isRequired
};

class UserMenu extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'UserMenu';
	}
	handleLogout() {
		auth.logout()
			.then(() => {
				delete localStorage.token;
				auth.onChange(false);
			}).catch((err) => {
				console.log(err);
			});
		auth.onChange(false);
	}
	render() {
		return (
			<div className={this.props.showMenu ? 'user-menu-container' : 'user-menu-container hide-menu'}>
				<div className="user-menu-arrow" />
				<Link to="/">Dashboard</Link>
				<Link to="donation">Donate</Link>
				<Link to="/">Settings</Link>
				<Link to="/" className="logout" onClick={this.handleLogout}>Logout</Link>
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
		return (
			<div className={UserHeaderClass}>
				<div className="text-flex pointer-cursor" onClick={this.toggleMenu}>
					<div className="user-info">Name Lastname</div>
				</div>
				<UserMenu showMenu={this.state.showMenu} />
			</div>
		);
	}
}

const Footer = React.createClass({
	render() {
		const footerClass = classNames({
			footer: true,
			'text-black': window.location.pathname === '/donation',
			'text-white': window.location.pathname !== '/donation'
		});
		return (
			<div className={footerClass}>
				<p>Made with ♥ by <Link to="http://hacksmiths.io">Team Hacksmiths</Link></p>
			</div>
		);
	}
});

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
	AppStoreIcon
};
