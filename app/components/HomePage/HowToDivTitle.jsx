import React from 'react';

const HowToDivTitle = (props) => (
	<div className="howto-divtitle text-center">
		<img src={props.imgSrc} alt={props.imgAlt} className="howto-img" />
		<p>{props.title}</p>
	</div>
);

HowToDivTitle.propTypes = {
	imgSrc: React.PropTypes.string.isRequired,
	imgAlt: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
};

module.exports = HowToDivTitle;
