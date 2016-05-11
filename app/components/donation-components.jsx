import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Snackbar from 'material-ui/Snackbar';

class Donation extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'DonationItem';
		this.state = {
			newItemName: '',
			itemsAdded: [],
			enableAddItem: false,
			enableDonation: false,
			open: false,
			openSnackBar: false
		};
		this.handleUpdateItem = this.handleUpdateItem.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSnackOpen = this.handleSnackOpen.bind(this);
		this.handleSnackClose = this.handleSnackClose.bind(this);
	}

	handleUpdateItem(e) {
		if (e.keyCode === 13) {
			this.handleAddItem(e);
		} else {
			this.setState({ enableAddItem: e.target.value !== '' });
			this.setState({ newItemName: e.target.value });
		}
	}
	handleAddItem(e) {
		if (e.keyCode === 13 || e.button === 0) {
			if (this.state.enableAddItem) {
				const newItemsArr = this.state.itemsAdded;
				newItemsArr.push({ name: this.state.newItemName });
				this.setState({
					itemsAdded: newItemsArr,
					enableDonation: true
				});

				document.getElementById('donationTitle').value = '';
				this.setState({
					enableAddItem: false,
					newItemName: ''
				});
			}
		}
	}
	handleRemoveItem(index) {
		const newItemsArr = this.state.itemsAdded;
		newItemsArr.splice(index, 1);
		this.setState({ itemsAdded: newItemsArr });
		if (this.state.itemsAdded.length === 0) this.setState({ enableDonation: false });
	}

	handleOpen() {
		this.setState({ open: true });
	}

	handleClose() {
		this.setState({ open: false });
	}

	handleDonate() {
		this.setState({ open: false });
		return <Snackbar />;
	}

	handleSnackOpen() {
		this.setState({ open: false, openSnackBar: true });
	}

	handleSnackClose() {
		this.setState({ openSnackBar: false });
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
				onTouchTap={this.handleClose}
			/>,
		];

		let donatedItems = this.state.itemsAdded.map(function getDonationList(item, index) {
			const boundClick = this.handleRemoveItem.bind(this, index);
			return (
				<DonationItem key={index} name={item.name} onRemoveItem={boundClick} />
			);
		}, this);
		return (
			<div className="donation-container">
				<DonateItem
					enableAddItem={this.state.enableAddItem}
					onAddItem={this.handleAddItem}
					onUpdateItem={this.handleUpdateItem}
				/>
				<div className="donation-list">
					{donatedItems}
				</div>
				<button
					className={this.state.enableDonation ? 'btn-donate' : 'btn-donate btn-disabled'}	onClick={this.handleOpen}
				>
					DONATE
				</button>
				<Dialog
					title="Donation Confirmation"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
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
					/>
					<List>
						<Subheader>Items</Subheader>
						{this.state.itemsAdded.map((item, index) => (
							<ListItem key={index} disabled>{item.name}</ListItem>
						))}
					</List>
				</Dialog>
				<Snackbar
					open={this.state.openSnackBar}
					message="Donation Successful!"
					autoHideDuration={4000}
					onRequestClose={this.handleSnackClose}
				/>
			</div>
		);
	}
}


const DonationItem = props => (
	<div className="donated-item text-flex">
		<div className="donated-name text-lightgrey">{props.name}</div>
		<button className="btn-del-donation" onClick={props.onRemoveItem} />
	</div>
);

DonationItem.propTypes = {
	name: React.PropTypes.string.isRequired,
	onRemoveItem: React.PropTypes.func.isRequired
};
const DonateItem = props => (
	<div className="text-flex">
		<TextField
			type="text"
			onKeyUp={props.onUpdateItem}
			id="donationTitle"
			hintText="What would you like to donate ?"
			style={{ width: '100%', height: 55, marginRight: 45, lineHeight: 1.7, letterSpacing: 1.9, fontFamily: "'Open Sans', sans-serif", fontSize: 20 }}
		/>
		<button
			className={props.enableAddItem ? 'btn-donation' : 'btn-donation btn-disabled'}
			onClick={props.onAddItem}
		/>
	</div>
);

DonateItem.propTypes = {
	onUpdateItem: React.PropTypes.func.isRequired,
	enableAddItem: React.PropTypes.bool.isRequired,
	onAddItem: React.PropTypes.func.isRequired
};

class DonationsList extends React.Component {
	constructor(props, context) {
		super(props, context);
	    if(localStorage.getItem('role') !== 0)
	    	{
				this.context.router.push('/');
	    	}
		}
	render() {
		return(
		<div className="donations">
			<h1 className="business-title text-center text-yellow">BUSINESS NAME</h1>
			<Donation />
		</div>
		);
	}
}

DonationsList.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = DonationsList;
