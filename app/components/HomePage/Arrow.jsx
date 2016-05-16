import React from 'react';

const Arrow = (props) => (
	<div className="becomedriver-arrow">
		<img className="pointer-cursor" onClick={this.props.onClick} src={"images/" + this.props.direction + "-Arrow.svg"} alt={this.props.direction + " arrow"} />
	</div>
);

Arrow.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	direction: React.PropTypes.string.isRequired
};

module.exports = Arrow;
