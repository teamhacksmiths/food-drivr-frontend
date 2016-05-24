import React from 'react';

const DonateButton = ({ onClick }) => (
  <button className="btn-start uppercase pointer-cursor" onClick={onClick}>
    Get started
  </button>
);

DonateButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

module.exports = DonateButton;
