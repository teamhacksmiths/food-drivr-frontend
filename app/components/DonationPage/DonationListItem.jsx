import React from 'react';

const DonationItem = ({ name, onRemoveItem }) => (
  <li>
    <div className="item-name text-lightgrey">{name}</div>
    <button className="pointer-cursor btn-delDonation" onClick={onRemoveItem} />
  </li>
);

DonationItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  onRemoveItem: React.PropTypes.func.isRequired
};

module.exports = DonationItem;
