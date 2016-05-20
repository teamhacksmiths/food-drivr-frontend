import React from 'react';
import { Header, Footer } from './reusable-components.jsx';
import auth from '../utils/auth.js';
import classNames from 'classnames/bind';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
	render() {
		const containerClass = classNames({
			container: true,
			'bg-blue': window.location.pathname === '/',
			'bg-red': window.location.pathname === '/signup' || window.location.pathname === '/signin',
			'bg-lightgrey': window.location.pathname === '/donation',
			'bg-yellow': window.location.href.indexOf('donor') > -1,
			'bg-lightblue': window.location.href.indexOf('volunteer') > -1
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
