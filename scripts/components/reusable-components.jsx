import React from 'react';
import { Link } from 'react-router';
import auth from '../utils/auth.js';

const Header = React.createClass({

    getInitialState() {
        return {
            loggedIn: auth.loggedIn()
        };
    },

    updateAuth(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        })
    },

    componentWillMount() {
        auth.onChange = this.updateAuth
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
            <h3 className='text-margin-left'>
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
    render() {
        return <h3 className='text-margin-left'>
                    <Link to='/' onClick={auth.logout} className='text-white'>Logout</Link>
                </h3>
    }
});

const Footer = React.createClass({
    render: function() {
        return (
            <div className='footer'>
                <p>Made with ♥ by <Link to='http://hacksmiths.io'>Team Hacksmiths</Link></p>
            </div>
        );
    }
});

module.exports = {
    Header: Header,
    Footer: Footer,
    Headline: Headline,
    ScrollDownButton: ScrollDownButton,
    AppStoreIcon: AppStoreIcon
}
