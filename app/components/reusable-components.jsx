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
		const email = localStorage.getItem('email');
		const pass = localStorage.getItem('password');
		if (this.state.loggedIn === true) {
			auth.login(email, pass).
			then((response) => {
				console.log(response);
				auth.onChange(true);
			})
			.catch((err) => {
				console.log(err);
				auth.onChange(false);
			});
		}
	},

	updateAuth(loggedIn) {
		this.setState({ loggedIn });
	},

	render() {
		let headerButton = <AppStoreIcon />;
		let logInButton = <Login />;
		if (window.location.pathname === '/donation') {
			headerButton = <TruckButton />;
		} else if (window.location.pathname === '/thankyou') {
			headerButton = '';
		} else if (window.location.pathname !== '/') {
			headerButton = <BackButton />;
		}

		if (window.location.pathname !== '/thankyou' && (this.state.loggedIn || window.location.pathname === '/donation')) {
			logInButton = <UserHeader />;
		} else if (window.location.pathname === '/thankyou') {
			logInButton = '';
		}
		return (
			<header className={window.location.pathname === '/donation' ? 'header header--donation bg-grey-light text-flex' : 'header text-flex'}>
				{headerButton}
				{logInButton}
			</header>
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
			<div className="back pointer-cursor" onClick={this.handleGoBack}></div>
		);
	}
}

const AppStoreIcon = props => (
	<Link to="" className={`header-appstore ${props.className}`} alt="apple store icon" />
);

AppStoreIcon.propTypes = {
	className: React.PropTypes.string
};

const TruckButton = () => (
	<div className="truck"></div>
);

const WhiteTruckButton = props => (
	<Link to="/">
		<div className="thankyou-truck"></div>
	</Link>
);


const Login = props => (
		<h3 className="source-sans">
			<Link to="/signin" className="text-white">Login</Link>
		</h3>
);

const ScrollDownButton = props => (
	<div className="uppercase">
		<p>{props.text}</p>
		<img src={props.color === 'white' ? 'images/down-arrow.svg' : 'images/down-arrow-yellow.svg'} alt="down arrow" />
	</div>
);

ScrollDownButton.propTypes = {
	text: React.PropTypes.string.isRequired,
	color: React.PropTypes.string.isRequired
};

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
			'text-black': window.location.pathname !== '/',
			'user-name': window.location.pathname === '/donation'
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

const Footer = React.createClass({
	render() {
		const footerClass = classNames({
			footer: true,
			'text-center': true,
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
	AppStoreIcon,
	WhiteTruckButton
};
