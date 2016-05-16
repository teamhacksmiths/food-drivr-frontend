import React from 'react';

const Headline = (props) => <h1 className={props.className}>{props.value}</h1>;

Headline.propTypes = {
	className: React.PropTypes.string,
	value: React.PropTypes.string.isRequired
};

module.exports = Headline;
