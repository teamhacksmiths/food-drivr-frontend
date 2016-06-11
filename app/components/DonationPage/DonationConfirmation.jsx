import React from 'react';
import DonationConfirmed from './DonationConfirmed.jsx';

const DonationConfirmation = (props) => (
  <DonationConfirmed
    onOpen={props.onOpen}
    onHandleClose={props.onHandleClose}
    onConfirm={props.onHandleDonate}
    onNoteChange={props.onNoteChange}
    noteMsg={props.noteMsg}
    items={props.itemsAdded}
    openSnackBar={props.openSnackBar}
    snackbarMessage={props.snackbarMessage}
    onSnackClose={props.onSnackClose}
  />
);

DonationConfirmation.propTypes = {
  onOpen: React.PropTypes.bool.isRequired,
  onHandleClose: React.PropTypes.func.isRequired,
  onHandleDonate: React.PropTypes.func.isRequired,
  onNoteChange: React.PropTypes.func.isRequired,
  itemsAdded: React.PropTypes.array.isRequired,
  openSnackBar: React.PropTypes.bool.isRequired,
  snackbarMessage: React.PropTypes.string.isRequired,
  noteMsg: React.PropTypes.string.isRequired,
  onSnackClose: React.PropTypes.func.isRequired
};

export default DonationConfirmation;
