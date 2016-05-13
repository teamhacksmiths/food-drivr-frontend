import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

const addresses = [
    {
      fullAddressText: "123 Main St., Corolla NC, 27927",
      default: true
    },
    {
      fullAddressText: '2121 Main St. Springfield, OH, 20202',
      default: false
    }
]

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Set as Default</MenuItem>
  </IconMenu>
)


const AddressListItems = addresses.map((address) => {
  return (
    address.default == true ?
    <ListItem
      key={1}
      primaryText={address.fullAddressText}
      rightIconButton={rightIconMenu}
    />
    :
    <ListItem
      primaryText={address.fullAddressText}
      rightIconButton={rightIconMenu}
      key={getNextKey}
    />
  )
});

let key = 1
const getNextKey = () => {
  key = key + 1
  return key;
}
const AddressList = props => {
  return(
    <ListItem
      key={1}
      primaryText="Addresses"
      initiallyOpen={false}
      primaryTogglesNestedList={true}
      nestedItems={[
        addresses.map((address) => {
          return(
            <ListItem
              key={address.default == true ? 1 : getNextKey()}
              primaryText={address.fullAddressText}
              rightIconButton={rightIconMenu}
            />
          )
        })
      ]}
    />
  )
}

export default class AddressListMenu extends React.Component {
  render() {
    return (
      <List>
        <AddressList />
      </List>
    );
  }
}
