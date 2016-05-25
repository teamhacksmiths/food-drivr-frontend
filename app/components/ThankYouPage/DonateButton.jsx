import React from 'react';

const DonateButton = ({ onClick }) => (
  <button className="btn btn-getStarted bg-white text-yellow" onClick={onClick}>
    Get started
  </button>
);

DonateButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

module.exports = DonateButton;
