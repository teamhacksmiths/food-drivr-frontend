import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MapsAddLocation from 'material-ui/svg-icons/maps/add-location';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="Edit"
    tooltipPosition="bottom-left"
    >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

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
    return(
      <ListItem>
        {this.props.address}
      </ListItem>
    );
  }
}


export default class AddressListMenu extends React.Component {
  renderAddressNodes() {
    return(
      this.props.addresses.map((address, i) => {
        return (
          <AddressListItem
            key={i}
            address={address}
          />
      )
      })
    )
  }
  render() {
    return(
      <List>
        {this.renderAddressNodes()}
      </List>
    );
  }
}

AddressListMenu.propTypes = {
  handleAddAddress: React.PropTypes.func.isRequired,
  handleDeleteAddress: React.PropTypes.func.isRequired,
  handleEditAddress: React.PropTypes.func.isRequired,
  handleSetAddressAsDefault: React.PropTypes.func.isRequired
}
