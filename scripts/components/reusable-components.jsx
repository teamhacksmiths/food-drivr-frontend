import React from 'react';
import { Link } from 'react-router';
import auth from '../utils/auth.js';
import classNames from 'classnames/bind';
import DropDownMenu from 'material-ui/lib/drop-down-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const Header = React.createClass({

	getInitialState: function() {
		return {
			loggedIn: auth.loggedIn()
		};
	},

	updateAuth: function(loggedIn) {
		this.setState({
			loggedIn: loggedIn
		});
	},

	componentWillMount: function() {
		auth.onChange = this.updateAuth;
		if (this.state.loggedIn == true) {
			auth.login()
		}
	},

	render: function() {
		let headerButton = <AppStoreIcon />;
		if (window.location.pathname === '/donation') {
			headerButton = <TruckButton />;
		} else if (window.location.pathname !== '/') {
			headerButton = <BackButton />;
		}
		return (
			<div className={window.location.pathname === '/donation' ? 'donation-header text-flex' : 'header text-flex'}>
				{ headerButton }
				{ this.state.loggedIn || window.location.pathname === '/donation' ? <UserHeader /> : <Login /> }
			</div>
		);
	}
});

const Headline = React.createClass({
	render: function() {
		return (
			<h1 className={this.props.className}>{this.props.value}</h1>
		);
	}
});

class BackButton extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'BackButton';
		this.handleGoBack = this.handleGoBack.bind(this);
	}
	handleGoBack(){
		this.context.router.goBack();
	}
	render() {
		return (
			<div className='back-button' onClick={this.handleGoBack}></div>
		);
	}
}

const AppStoreIcon = React.createClass({
	render: function() {
		return (
			<Link to='' className={this.props.className}>
				<img src='images/App-Store-Badge.png' alt='apple store icon'/>
			</Link>
		);
	}
});

class TruckButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='truck-button'></div>
    );
  }
}


const Login = React.createClass({
	render: function() {
		return (
			<h3 className='text-margin-left source-sans'>
				<Link to='/signin' className='text-white'>Login</Link>
			</h3>
		);
	}
});

const ScrollDownButton = React.createClass({
	render: function() {
		return (
			<div>
				<p>{this.props.text}</p>
				<img src={this.props.color === 'white' ? 'images/down-arrow.svg' : 'images/down-arrow-yellow.svg'} alt='down arrow'/>
			</div>
		);
	}
});

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
				<div className='user-menu-arrow'/>
				<Link to='/'>Dashboard</Link>
				<Link to='donation'>Donate</Link>
				<Link to='/'>Settings</Link>
				<Link to='/' className='logout' onClick={this.handleLogout}>Logout</Link>
			</div>
		);
	}
}

class UserHeader extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'UserHeader';
		this.state= {
			showMenu: false
		}
		this.toggleMenu = this.toggleMenu.bind(this)
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
				<div className='text-flex pointer-cursor' onClick={this.toggleMenu}>
					<div className='user-info'>Name Lastname</div>
				</div>
				<UserMenu showMenu={this.state.showMenu}/>
			</div>
		);
	}
}

const Footer = React.createClass({
	render: function() {
		var footerClass = classNames({
			footer: true,
			'text-black': window.location.pathname === '/donation',
			'text-white': window.location.pathname !== '/donation'
		});
		return (
			<div className={footerClass}>
				<p>Made with ♥ by <Link to='http://hacksmiths.io'>Team Hacksmiths</Link></p>
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
	Header: Header,
	Footer: Footer,
	Headline: Headline,
	ScrollDownButton: ScrollDownButton,
	AppStoreIcon: AppStoreIcon
}
