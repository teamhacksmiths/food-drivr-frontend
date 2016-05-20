import React from 'react';

const Headline = ({ className, value }) => (<h1 className={className}>{value}</h1>);

Headline.propTypes = {
	className: React.PropTypes.string,
	value: React.PropTypes.string.isRequired
};

module.exports = Headline;
