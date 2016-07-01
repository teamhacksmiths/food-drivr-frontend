import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const DefaultCheckbox = ({
  address,
  handleToggle
}) => (
  <Checkbox
    defaultChecked={address.default}
    onClick={handleToggle}
  />
);

DefaultCheckbox.propTypes = {
  address: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default DefaultCheckbox;
