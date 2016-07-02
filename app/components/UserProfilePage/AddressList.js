import React, { PropTypes } from 'react'
import AddressListItem from './AddressListItem';
import Divider from 'material-ui/Divider';
import { List } from 'material-ui/List';

const AddressList = ({
  addresses,
  handleToggle
}) => (
  <div className="address-list">
    <List>
      <Divider />
      {addresses.map((address, i) =>
        <div>
          <AddressListItem
            key={i}
            address={address}
            handleToggle={handleToggle}
            index={i}
          />
          <Divider />
        </div>
      )}
    </List>
  </div>
);

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired
};

export default AddressList;
