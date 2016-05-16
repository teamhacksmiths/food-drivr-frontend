import React from 'react';

const ScrollDownButton = props => (
	<div>
		<p>{props.text}</p>
		<img src={props.color === 'white' ? 'images/down-arrow.svg' : 'images/down-arrow-yellow.svg'} alt="down arrow" />
	</div>
);

ScrollDownButton.propTypes = {
	text: React.PropTypes.string.isRequired,
	color: React.PropTypes.string.isRequired
};