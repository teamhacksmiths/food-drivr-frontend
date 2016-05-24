import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import DonationConfirmed from './DonationConfirmed.jsx';

class DonationConfirmation extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.props.onHandleClose}
      />,
      <FlatButton
        label="Donate"
        primary
        onTouchTap={this.props.onHandleDonate}
        keyboardFocused
      />,
    ];

    return (
      <DonationConfirmed
        actions={actions}
        onOpen={this.props.onOpen}
        onHandleClose={this.props.onHandleClose}
        onNoteChange={this.props.onNoteChange}
        noteMsg={this.props.noteMsg}
        items={this.props.itemsAdded}
        openSnackBar={this.props.openSnackBar}
        snackbarMessage={this.props.snackbarMessage}
        onSnackClose={this.props.onSnackClose}
      />
    );
  }
}

module.exports = DonationConfirmation;
