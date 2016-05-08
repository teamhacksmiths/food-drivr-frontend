import React from 'react';
import { Link } from 'react-router';
import auth from '../utils/auth.js';
import classNames from 'classnames/bind';

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
        return (
            <div className='header text-flex'>
                <AppStoreIcon />
                {this.state.loggedIn ?
                    <Logout /> : <Login />
                }
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

const AppStoreIcon = React.createClass({
    render: function() {
        return (
            <Link to='' className={this.props.className}>
                <img src='images/App-Store-Badge.png' alt='apple store icon'/>
            </Link>
        );
    }
});

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

const Logout = React.createClass({
    toLogout: function() {
        this.context.router.push('/');
        auth.logout()
            .then(() => {
                delete localStorage.token;
                auth.onChange(false);
            }).catch((err) => {
                console.log(err);
            });;
        auth.onChange(false);
    },
    render: function() {
        var logoutClass = classNames({
          'btn-only-text': true,
          'text-white': window.location.pathname === '/',
          'text-black': window.location.pathname !== '/'
        });
        return <h3 className='text-margin-left source-sans'>
                    <button onClick={this.toLogout} className={logoutClass}>Logout</button>
                </h3>
    }
});

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

Logout.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = {
    Header: Header,
    Footer: Footer,
    Headline: Headline,
    ScrollDownButton: ScrollDownButton,
    AppStoreIcon: AppStoreIcon
}
