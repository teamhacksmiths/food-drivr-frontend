import React from 'react';

const Arrow = ({ onClick, direction }) => (
  <div className="become-a__arrow">
    <img className="pointer-cursor" onClick={onClick} src={`images/${direction}-Arrow.svg`} alt={`${direction} arrow`} />
  </div>
);

Arrow.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  direction: React.PropTypes.string.isRequired
};

module.exports = Arrow;
