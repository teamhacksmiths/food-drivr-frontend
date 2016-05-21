import React from 'react';
import auth from '../../utils/auth.js';
import FlatButton from 'material-ui/FlatButton';
import DonationConfirmed from './DonationConfirmed.jsx';

class DonationConfirmation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			openSnackBar: false,
			snackbarMessage: '',
			noteMsg: ''
		};
		this.handleClose = this.handleClose.bind(this);
		this.handleDonate = this.handleDonate.bind(this);
		this.handleSnackClose = this.handleSnackClose.bind(this);
		this.handleNoteChange = this.handleNoteChange.bind(this);
	}

	handleClose() {
		this.setState({ open: false });
	}

	handleDonate() {
		auth.postDonation(this.state.itemsAdded)
		.then((response) => {
			console.log(response);
			this.setState({ open: false,
							openSnackBar: true,
							snackbarMessage: 'Donation Complete!',
							itemsAdded: [] });
		})
		.catch((err) => {
			console.log(err);
			this.setState({ open: false,
							openSnackBar: true,
							snackbarMessage: 'Donation Could Not Be Sent! Please Try Again!' });
		});
	}

	handleSnackClose() {
		this.setState({ openSnackBar: false });
	}

	handleNoteChange(e) {
		this.setState({
			noteMsg: e.target.value
		});
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Donate"
				primary
				onTouchTap={this.handleDonate}
				keyboardFocused
			/>,
		];

		return (
			<DonationConfirmed
				actions={actions}
				onOpen={this.state.open}
				onHandleClose={this.handleClose}
				onNoteChange={this.handleNoteChange}
				noteMsg={this.state.noteMsg}
				items={this.state.itemsAdded}
				openSnackBar={this.state.openSnackBar}
				snackbarMessage={this.state.snackbarMessage}
				onSnackClose={this.handleSnackClose}
			/>
		);
	}
}

module.exports = DonationConfirmation;
