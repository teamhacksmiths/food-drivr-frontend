import React from 'react';
import AddNewItem from './AddNewItem.jsx';
import DonationList from './DonationList.jsx';

const PendingDonations = (props) => (
  <div className="donation-container">
    <AddNewItem
      enableAddItem={props.enableAddItem}
      onAddItem={props.onAddItem}
      onUpdateItem={props.onUpdateItem}
    />
    <div className="donation-list">
    <DonationList
      itemsAdded={props.itemsAdded}
      onHandleRemoveItem={props.onHandleRemoveItem}
    />
    </div>
    <button
      className={props.enableDonation ? 'btn-donate' : 'btn-donate btn-disabled'} onClick={props.onHandleOpen}
    >
      DONATE
    </button>
  </div>
);

PendingDonations.propTypes = {
  enableAddItem: React.PropTypes.bool.isRequired,
  onAddItem: React.PropTypes.func.isRequired,
  onUpdateItem: React.PropTypes.func.isRequired,
  itemsAdded: React.PropTypes.array.isRequired,
  enableDonation: React.PropTypes.bool.isRequired,
  onHandleOpen: React.PropTypes.func.isRequired,
  onHandleRemoveItem: React.PropTypes.func.isRequired
};

module.exports = PendingDonations;
