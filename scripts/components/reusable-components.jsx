import React from 'react';
import { Link } from 'react-router';
import auth from '../utils/auth.js';

const Header = React.createClass({

    getInitialState() {
        return {
            loggedIn: auth.loggedIn()
        };
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

const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <p>You are now logged out</p>
  }
})

const ScrollDownButton = React.createClass({
    render: function() {
        return (
            <div>
				<p className='text-white'>{this.props.text}</p>
				<img src='images/down-arrow.svg' alt='down arrow'/>
			</div>
        );
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
