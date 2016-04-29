import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
	render: function() {
		return (
			<div className='header text-flex'>
				<AppStoreIcon />
				<Login />
			</div>
		);
	}
});

var Headline = React.createClass({
	render: function() {
		return (
			<h1 className={this.props.className}>{this.props.value}</h1>
		);
	}
});

var AppStoreIcon = React.createClass({
	render: function() {
		return (
			<Link to='' className={this.props.className}>
				<img src='images/App-Store-Badge.png' alt='apple store icon'/>
			</Link>
		);
	}
});

var Login = React.createClass({
	render: function() {
		return (
			<h3 className='text-margin-left'>
				<Link to='/signin' className='text-white'>Login</Link>
			</h3>
		);
	}
});

var ScrollDownButton = React.createClass({
	render: function() {
		return (
			<div>
				<p className='text-white'>{this.props.text}</p>
				<img src='images/down-arrow.svg' alt='down arrow'/>
			</div>
		);
	}
});

var Footer = React.createClass({
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
