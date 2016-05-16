import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

const Footer = () => {
	let footerClass = classNames({
		footer: true,
		'text-black': window.location.pathname === '/donation',
		'text-white': window.location.pathname !== '/donation'
	});
	return (
		<div className={footerClass}>
			<p>Made with ♥ by <Link to="http://hacksmiths.io">Team Hacksmiths</Link></p>
		</div>
	);
};

module.exports = Footer;
