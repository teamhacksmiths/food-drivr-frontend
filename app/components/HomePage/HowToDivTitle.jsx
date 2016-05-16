import React from 'react';

const HowToDivTitle = (props) => (
	<div className="howto-divtitle text-center">
		<img src={this.props.imgSrc} alt={this.props.imgAlt} className="howto-img" />
		<p>{this.props.title}</p>
	</div>
);

HowToDivTitle.propTypes = {
	imgSrc: React.PropTypes.string.isRequired,
	imgAlt: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
};

module.exports = HowToDivTitle;
