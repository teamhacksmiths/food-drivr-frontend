import React from 'react';
import { Header, Footer } from './reusable-components.jsx';
import auth from '../utils/auth.js';
import classNames from 'classnames/bind';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
	render() {
		const role = parseInt(localStorage.getItem('role'), 10);
		const containerClass = classNames({
			container: true,
			'blue-background': window.location.pathname === '/',
			'red-background': window.location.pathname === '/signup' || window.location.pathname === '/signin',
			'lightgrey-background': window.location.pathname === '/donation',
			'yellow-background': !role && (window.location.href.indexOf('donor') > -1 || window.location.href.indexOf('volunteer') > -1),
			'lightblue-background': role && (window.location.href.indexOf('volunteer') > -1 || window.location.href.indexOf('donor') > -1)
		});
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div className={containerClass}>
					<Header />
					<ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
						{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
					</ReactCSSTransitionGroup>
					<Footer />
				</div>
			</MuiThemeProvider>
		);
	}
}

module.exports = App;
