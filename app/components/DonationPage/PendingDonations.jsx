import React from 'react';
import AddNewItem from './AddNewItem.jsx';
import DonationList from './DonationList.jsx';

const PendingDonations = (props) => (
  <section className="donation">
    <AddNewItem
      enableAddItem={props.enableAddItem}
      onAddItem={props.onAddItem}
      onUpdateItem={props.onUpdateItem}
    />
    <DonationList
      itemsAdded={props.itemsAdded}
      onHandleRemoveItem={props.onHandleRemoveItem}
    />
    <button
      onClick={props.onHandleOpen}
      className={props.enableDonation ?
        'btn btn-donate btn--shadow bg-yellow text-white'
      :
        'btn btn-donate btn--shadow bg-yellow text-white btn--disabled'
      }
    >
      Donate
    </button>
  </section>
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

export default PendingDonations;
