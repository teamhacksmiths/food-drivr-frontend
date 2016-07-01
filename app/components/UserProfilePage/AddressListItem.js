import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List';
import DefaultCheckbox from './DefaultCheckbox';

// join :: Object -> Array -> String
const join = (address) =>
  Object.keys(address).map((k) => address[k]).join(' ');

/**
 * @function constructAddress
 * @description address
 * @param {Components} - Address object - the address object for the item
 */
const constructAddress = (address) =>
  address.fullAddress || join(address);

const AddressListItem = (props) => (
  <ListItem
    primaryText={constructAddress(props.address)}
    leftCheckbox={
      <DefaultCheckbox {...props} />
    }
  />
);

AddressListItem.propTypes = {
  address: PropTypes.object.isRequired
};

export default AddressListItem;
