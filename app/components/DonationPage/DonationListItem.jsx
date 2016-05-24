import React from 'react';

const DonationItem = ({ name, onRemoveItem }) => (
  <div className="donated-item text-flex">
    <div className="donated-name text-lightgrey">{name}</div>
    <button className="btn-del-donation" onClick={onRemoveItem} />
  </div>
);

DonationItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  onRemoveItem: React.PropTypes.func.isRequired
};

module.exports = DonationItem;
