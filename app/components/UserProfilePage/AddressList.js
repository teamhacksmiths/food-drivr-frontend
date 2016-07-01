import React, { PropTypes } from 'react'
import AddressListItem from './AddressListItem';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';

const AddressList = ({
  addresses
}) => (
  <div className="address-list">
    {addresses.map((address, i) =>
      <AddressListItem
        key={i}
        address={address}
      />
    )}
  </div>
);

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired
};

export default AddressList;
