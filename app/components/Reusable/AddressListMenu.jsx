import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch
    tooltip="Edit"
    tooltipPosition="bottom-left"
  >
  <MoreVertIcon color={grey400} />
  </IconButton>
);


class RightMenuItem extends React.Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={iconButtonElement}
      >
        <MenuItem>Edit</MenuItem>
        <MenuItem>Set Default</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );
  }
}

class AddressListItem extends React.Component {
  render() {
    return (
      <ListItem>
        {this.props.address}
      </ListItem>
    );
  }
}

export default class AddressListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.renderAddressNodes = () => this.renderAddressNodes();
  }

  renderAddressNodes() {
    return (
      this.props.addresses.map((address, i) =>
          <AddressListItem
            key={i}
            address={address}
          />
      )
    );
  }

  render() {
    return (
      <List>
        {this.renderAddressNodes}
      </List>
    );
  }
}

AddressListMenu.propTypes = {
  handleAddAddress: React.PropTypes.func.isRequired,
  handleDeleteAddress: React.PropTypes.func.isRequired,
  handleEditAddress: React.PropTypes.func.isRequired,
  handleSetAddressAsDefault: React.PropTypes.func.isRequired
};
