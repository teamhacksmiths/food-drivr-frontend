import React, { PropTypes } from 'react';
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

const AddressListItem = ({
  handleToggle,
  address,
  index,
  handleRemoveAddress
}) => (
  <ListItem>
    <div className="flexRow">
      <DefaultCheckbox
        handleToggle={handleToggle}
        index={index}
        address={address}
      />
      <h4 className="addressText">
        {constructAddress(address)}
      </h4>
      <button
        className="btn btn-delDonation flex-end"
        id={index}
        onClick={handleRemoveAddress}
      />
    </div>
  </ListItem>
);

AddressListItem.propTypes = {
  address: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemoveAddress: PropTypes.func,
  index: PropTypes.number.isRequired
};

export default AddressListItem;
