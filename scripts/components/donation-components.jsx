import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'react';
import {ScrollDownButton} from './reusable-components.jsx';
import auth from '../utils/auth.js';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class Donation extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'DonationItem';
		this.state = {
			newItemName: '',
			itemsAdded: [],
			enableAddItem: false,
			enableDonation: false,
			open: false
		};
		this.handleUpdateItem = this.handleUpdateItem.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	handleUpdateItem(e) {
		if(e.keyCode === 13) {
			this.handleAddItem(e);
		} else {
			e.target.value === '' ? this.setState({enableAddItem: false}) : this.setState({enableAddItem: true})
			this.setState({newItemName: e.target.value });
		}
	}
	handleAddItem(e) {
		console.log(e.keyCode);
		if(e.keyCode === 13 || e.button === 0){
			if (this.state.enableAddItem) {
				let newItemsArr = this.state.itemsAdded;
				newItemsArr.push({name: this.state.newItemName});
				this.setState({
					itemsAdded: newItemsArr,
					enableDonation: true
				});
				{/* Restore default status of the item input */}
				document.getElementById('donationTitle').value = '';
				this.setState({
					enableAddItem: false,
					newItemName: ''
				});
			}
		}
	}
	handleRemoveItem(index){
		let newItemsArr = this.state.itemsAdded;
		newItemsArr.splice(index, 1);
		this.setState({itemsAdded: newItemsArr});
		this.state.itemsAdded.length === 0 && this.setState({enableDonation: false});
	}

	handleOpen(){
		this.setState({open: true});
	}

	handleClose() {
		this.setState({open: false});
	}

	render() {
		const token = auth.getToken();
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Donate"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
		];

		let donatedItems = this.state.itemsAdded.map(function(item, index){
		var boundClick = this.handleRemoveItem.bind(this, index);
		return (
				<DonationItem key={index} name={item.name} onRemoveItem={boundClick}/>
			);
		}, this);
		return (
			<div className='donation-container'>
				<DonateItem enableAddItem={this.state.enableAddItem}
							onAddItem={this.handleAddItem}
							onUpdateItem={this.handleUpdateItem}
							/>
				<div className='donation-list'>
					{donatedItems}
				</div>
				<button className={this.state.enableDonation ? 'btn-donate' : 'btn-donate btn-disabled'} onClick={this.handleOpen}>DONATE</button>
				<Dialog
				  title="Donation Confirmation"
				  actions={actions}
				  modal={false}
				  open={this.state.open}
				  onRequestClose={this.handleClose}
				  autoScrollBodyContent={true}
				>
					<br/>
						Where?
					<br/>
					<TextField
					   type="text"
					   hintText="What's Your Address?"
					   id='address'
					   />
					<br/>
					<br/>
					When?
					<DatePicker hintText="Date Picker"/>
					Notes For The Driver?
					<br/>
					<TextField
						type="text"
						hintText="Special Notes For The Driver?"
						id='driverNote'
						/>
					<List>
						<Subheader>Items</Subheader>
						{this.state.itemsAdded.map(function(item, index){
							return <ListItem
							key={index}
							disabled={true}
							>{item.name}</ListItem>;
							})
						}
					</List>
				</Dialog>
			</div>
		);
	}
}


const DonationItem = props => (
	<div className='donated-item text-flex'>
		<div className="donated-name text-lightgrey">{props.name}</div>
		<button className="btn-del-donation" onClick={props.onRemoveItem} />
	</div>
);

const DonateItem = props => (
	<div className='text-flex'>
		<TextField
				type="text"
				onKeyUp={props.onUpdateItem}
				id='donationTitle'
				hintText="What would you like to donate ?"
				style={{width: '100%', height: 55, marginRight: 45, lineHeight: 1.7, letterSpacing: 1.9, fontFamily: "'Open Sans', sans-serif", fontSize: 20}}
			   />
		<button className={props.enableAddItem ? "btn-donation" : "btn-donation btn-disabled"}
				onClick={props.onAddItem} />
	</div>
)

const DonationsList = props => (
	<div className="donations">
		<h1 className='business-title text-center text-yellow'>BUSINESS NAME</h1>
		<Donation />
	</div>
)

module.exports = DonationsList;
