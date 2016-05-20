import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Snackbar from 'material-ui/Snackbar';
import auth from '../utils/auth.js';

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
			openSnackBar: false,
			snackbarMessage: '',
			noteMsg: ''
		};
		this.handleUpdateItem = this.handleUpdateItem.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleDonate = this.handleDonate.bind(this);
		this.handleSnackClose = this.handleSnackClose.bind(this);
		this.handleNoteChange = this.handleNoteChange.bind(this);
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
				newItemsArr.push({ description: this.state.newItemName });
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
		const el = document.getElementsByTagName('button')[1];
		if (!el.classList.contains('btn-disabled')){
		this.setState({ open: true });
		}
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
		.catch((err) =>{
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
				keyboardFocused={true}
			/>,
		];

		let donatedItems = this.state.itemsAdded.map(function getDonationList(item, index) {
			const boundClick = this.handleRemoveItem.bind(this, index);
			return (
				<DonationItem key={index} name={item.description} onRemoveItem={boundClick} />
			);
		}, this);
		return (
			<article className="donation">
				<DonateItem
					enableAddItem={this.state.enableAddItem}
					onAddItem={this.handleAddItem}
					onUpdateItem={this.handleUpdateItem}
				/>
				<div className="donation-list">
					{donatedItems}
				</div>
				<button
					className={this.state.enableDonation ? 'btn-donate' : 'btn-donate btn-disabled'} onClick={this.handleOpen}
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
						onChange={this.handleNoteChange}
						value={this.state.noteMsg}
					/>
					<List>
						<Subheader>Items</Subheader>
						{this.state.itemsAdded.map((item, index) => (
							<ListItem key={index} disabled>{item.description}</ListItem>
						))}
					</List>
				</Dialog>
				<Snackbar
					open={this.state.openSnackBar}
					message={this.state.snackbarMessage}
					autoHideDuration={4000}
					onRequestClose={this.handleSnackClose}
				/>
		</article>
		);
	}
}


const DonationItem = props => (
	<div className="donated-item text-flex">
		<div className="donated-name text-lightgrey">{props.name}</div>
		<button className="delDonation" onClick={props.onRemoveItem} />
	</div>
);

var itemList = React.createClass({
	render: function(){
		return (
			<li className="row donation">
				<div>
					<h4>{this.props.title}</h4>
					<p>{this.props.date}</p>
				</div>
				{this.props.children}
			</li>
		);
	}
});

var DonatedItem = React.createClass({
	render: function() {
		return (
			<div className="text-right">
				<div className='donation-item'>{this.props.quantity} {this.props.unit} x {this.props.title}</div>
			</div>
		);
	}
});

DonationItem.propTypes = {
	name: React.PropTypes.string.isRequired,
	onRemoveItem: React.PropTypes.func.isRequired
};

const styles = {
	textField: {
		width: '100%',
		maxWidth: 500,
		height: 55,
		marginRight: 15,
		lineHeight: 2.7,
		paddingBottom: 30,
		letterSpacing: 1.9,
		fontFamily: "'Open Sans', sans-serif"
	}
};

const DonateItem = props => (
	<div className="donateItem">
		<TextField
			type="text"
			onKeyUp={props.onUpdateItem}
			id="donationTitle"
			hintText="What would you like to donate ?"
			className="donateItem-input"
			style={styles.textField}
		/>
		<button
			className={props.enableAddItem ? 'btn-addDonation' : 'btn-addDonation btn-disabled'}
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
		this.state = {
			donations: [],
		}
	};
	componentWillMount() {
		var role = localStorage.getItem('role');
		if (parseInt(role) !== 0 ) {
		this.context.router.push('/');
		}
	}
	componentDidMount() {
		auth.getDonation().then((response) =>{
			console.log(response);
			this.setState({ donations: response.data.donations });
			})
		.catch((err) => {
			console.log(err);
		});
	}
	render() {
		var donationList = this.state.donations.map(function(donation){
			return (
				<itemList title={donation.participants.donor.name} date={donation.created_at}>
					{
						donation.items.map(function(item){
							return <DonatedItem quantity={item.quantity} unit={item.unit} title={item.description} />;
						})
					}
				</itemList>
			);
		});
		return (
		<div className="donations">
			<h1 className="donations-title text-center text-yellow">BUSINESS NAME</h1>
			<Donation />
			{donationList}
		</div>
		);
	}
}

DonationsList.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = DonationsList;
