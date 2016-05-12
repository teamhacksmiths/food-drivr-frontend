import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Headline } from '../components/reusable-components.jsx';

class ThankYou extends React.Component {
	constructor(props, context) {
		super(props, context);
		if(localStorage.getItem('role') != 1)
	    	{
				this.context.router.push('/');
	    	}
	};
	render() {
		return (
			<div>
				<Headline value="Thank You! We will be in contact with you shortly!" />
			</div>
		);
	}
}

ThankYou.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = ThankYou;