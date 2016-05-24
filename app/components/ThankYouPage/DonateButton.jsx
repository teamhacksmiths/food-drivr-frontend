import React from 'react';

const DonateButton = ({ onHandleClick }) => (
  <button className="thankyou-btn-donate" onClick={onHandleClick}>
    GET STARTED
  </button>
);

DonateButton.propTypes = {
  onHandleClick: React.PropTypes.func.isRequired
};

module.exports = DonateButton;
