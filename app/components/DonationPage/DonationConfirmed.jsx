import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Snackbar from 'material-ui/Snackbar';

const DonationConfirmed = (props) => (
  <div>
    <Dialog
      title="Donation Confirmation"
      actions={props.actions}
      modal={false}
      open={props.onOpen}
      onRequestClose={props.onHandleClose}
      autoScrollBodyContent
    >
      <br />
      Where?
      <br />
      <TextField
        type="text"
        hintText="What's Your Address?"
        id="address"
      />
      <br />
      <br />
      When?
      <DatePicker hintText="Date Picker" />
      Notes For The Driver?
      <br />
      <TextField
        type="text"
        hintText="Special Notes For The Driver?"
        id="driverNote"
        onChange={props.onNoteChange}
        value={props.noteMsg}
      />
      <List>
        <Subheader>Items</Subheader>
        {props.items.map((item, index) => (
          <ListItem key={index} disabled>{item.description}</ListItem>
        ))}
      </List>
    </Dialog>
    <Snackbar
      open={props.openSnackBar}
      message={props.snackbarMessage}
      autoHideDuration={4000}
      onRequestClose={props.onSnackClose}
    />
  </div>
);

DonationConfirmed.propTypes = {
  actions: React.PropTypes.array.isRequired,
  onOpen: React.PropTypes.bool.isRequired,
  onHandleClose: React.PropTypes.func.isRequired,
  onNoteChange: React.PropTypes.func.isRequired,
  noteMsg: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  openSnackBar: React.PropTypes.bool.isRequired,
  snackbarMessage: React.PropTypes.string.isRequired,
  onSnackClose: React.PropTypes.func.isRequired
};

module.exports = DonationConfirmed;
