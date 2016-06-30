import React from 'react';

const DonationHistoryItem = ({
  quantity,
  unit,
  title
}) => (
  <div className="text-right">
    {quantity} {unit} x {title}
  </div>
);

DonationHistoryItem.propTypes = {
  quantity: React.PropTypes.number,
  unit: React.PropTypes.string,
  title: React.PropTypes.string
};

export default DonationHistoryItem;
