import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Headline } from '../components/reusable-components.jsx';

class ThankYou extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<div>
				<Headline value="Thank You! We will be in contact with you shortly!" />
			</div>
		);
	}
}
module.exports = ThankYou;