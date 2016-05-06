import React from 'react';
import { Header, Footer } from './reusable-components.jsx';
import auth from '../utils/auth.js';
import classNames from 'classnames/bind';


export default class App extends React.Component {
	render() {
		var containerClass = classNames({
			container: true,
			'blue-background': window.location.pathname === '/',
			'red-background': window.location.pathname === '/signup' || window.location.pathname === '/signin',
			'lightgrey-background': window.location.pathname === '/donation',
			'yellow-background': window.location.pathname === '/signup/donor',
			'lightblue-background': window.location.pathname === '/signup/volunteer'
		});
		return (
			<div className={containerClass}>
					<Header />
					{this.props.children}
					<Footer />
			</div>
		);
	}
}

module.exports = App;
