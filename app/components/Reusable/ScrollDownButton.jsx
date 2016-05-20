import React from 'react';

const ScrollDownButton = ({ text, color }) => (
	<div>
		<p>{text}</p>
		<img src={color === 'white' ? 'images/down-arrow.svg' : 'images/down-arrow-yellow.svg'} alt="down arrow" />
	</div>
);

ScrollDownButton.propTypes = {
	text: React.PropTypes.string.isRequired,
	color: React.PropTypes.string.isRequired
};

module.exports = ScrollDownButton;
