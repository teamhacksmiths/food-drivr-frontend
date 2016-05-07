import React from 'react';
import { Header, Footer } from './reusable-components.jsx';
import auth from '../utils/auth.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Paper from 'material-ui/lib/paper';

export default class App extends React.Component {
	render() {
		let style = {
			width: '100%',
			minHeight: '100%',
			maxWidth: 1450,
			padding: '1px 0',
			margin: '0 auto',
			position: 'relative'
		}
		if (window.location.pathname === '/') {
			style.background = '#394969'
		} else if (window.location.pathname === '/signup' || window.location.pathname === '/signin') {
			style.background = ' rgb(255, 30, 64)'
		} else if (window.location.pathname === '/donation'){
			style.background = '#f8f8f8'
		} else if (window.location.pathname === '/signup/donor'){
			style.background = 'rgb(247, 179, 43)'
		} else if (window.location.pathname === '/signup/volunteer'){
			style.background = 'rgb(20, 207, 232)'
		}
		return (
			<Paper zDepth={4} style={style} rounded={false}>
				<Header />
				<ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
				</ReactCSSTransitionGroup>
				<Footer />
			</Paper>
		);
	}
}

module.exports = App;
