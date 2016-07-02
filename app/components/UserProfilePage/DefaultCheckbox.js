import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const DefaultCheckbox = ({
  address,
  handleToggle,
  id
}) => (
  <span>
    <Checkbox
      id={id}
      defaultChecked={address.default}
      onCheck={handleToggle}
    />
  </span>
);

DefaultCheckbox.propTypes = {
  address: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  id: PropTypes.number
};

export default DefaultCheckbox;
