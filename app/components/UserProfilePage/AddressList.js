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
    {addresses.length ?
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
    :
      <h4 className="need-address">Please enter at least one address</h4>
    }
  </div>
);

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired,
  handleRemoveAddress: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default AddressList;
