import React, { PropTypes } from 'react'
import AddressListItem from './AddressListItem';
import Divider from 'material-ui/Divider';
import { List } from 'material-ui/List';

const AddressList = ({
  addresses,
  handleToggle,
  handleRemoveAddress
}) => (
  <div className="address-list">
    <List>
      {addresses.map((address, i) =>
        <div>
          <AddressListItem
            key={i}
            address={address}
            index={i}
            handleToggle={handleToggle}
            handleRemoveAddress={handleRemoveAddress}
          />
          <Divider />
        </div>
      )}
    </List>
  </div>
);

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired,
  handleRemoveAddress: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default AddressList;
