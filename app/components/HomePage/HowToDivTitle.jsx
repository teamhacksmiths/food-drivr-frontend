import React from 'react';

const HowToDivTitle = ({ imgSrc, imgAlt, title }) => (
	<div className="howto-divtitle text-center">
		<img src={imgSrc} alt={imgAlt} className="howto-img" />
		<p>{title}</p>
	</div>
);

HowToDivTitle.propTypes = {
	imgSrc: React.PropTypes.string.isRequired,
	imgAlt: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
};

module.exports = HowToDivTitle;
