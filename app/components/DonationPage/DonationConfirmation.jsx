import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import DonationConfirmed from './DonationConfirmed.jsx';

class DonationConfirmation extends React.Component {
  render() {
    return (
      <DonationConfirmed
        onOpen={this.props.onOpen}
        onHandleClose={this.props.onHandleClose}
        onNoteChange={this.props.onNoteChange}
        noteMsg={this.props.noteMsg}
        items={this.props.itemsAdded}
        openSnackBar={this.props.openSnackBar}
        snackbarMessage={this.props.snackbarMessage}
        onSnackClose={this.props.onSnackClose}
        onConfirm={this.props.onHandleDonate}
      />
    );
  }
}

module.exports = DonationConfirmation;
