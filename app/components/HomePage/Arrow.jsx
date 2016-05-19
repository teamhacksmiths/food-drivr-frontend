import React from 'react';

const Arrow = (props) => (
	<div className="becomedriver-arrow">
		<img className="pointer-cursor" onClick={props.onClick} src={`images/ ${props.direction} -Arrow.svg`} alt={`${props.direction} arrow`} />
	</div>
);

Arrow.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	direction: React.PropTypes.string.isRequired
};

module.exports = Arrow;
