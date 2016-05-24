import React from 'react';

const DonationHistoryItem = ({ quantity, unit, title }) => (
  <div className="col-xs-4 text-right">
    <div className="donation-item">{quantity} {unit} x {title}</div>
  </div>
);

DonationHistoryItem.propTypes = {
  quantity: React.PropTypes.number,
  unit: React.PropTypes.string,
  title: React.PropTypes.string
};

module.exports = DonationHistoryItem;
