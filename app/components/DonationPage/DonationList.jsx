import React from 'react';
import DonationListItem from './DonationListItem.jsx';

const DonationList = (props) => (
  <div>
    <ul className="donation__item-list">
      {props.itemsAdded.map((item, index) => {
        const boundClick = props.onHandleRemoveItem.bind(this, index);
        return (
          <DonationListItem
            key={index}
            name={item.description}
            onRemoveItem={boundClick}
          />
        );
      })}
    </ul>
  </div>
);

DonationList.propTypes = {
  itemsAdded: React.PropTypes.array.isRequired,
  onHandleRemoveItem: React.PropTypes.func.isRequired
};

export default DonationList;
