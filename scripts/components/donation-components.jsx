import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'react';
import {ScrollDownButton} from './reusable-components.jsx';
import auth from '../utils/auth.js';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import classNames from 'classnames/bind';
import { Header } from './reusable-components.jsx';


class Donation extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'DonationItem';
		this.state = {
			newItemName: '',
			itemsAdded: [],
			enableAddItem: false,
			enableDonation: false
		};
		this.handleUpdateItem = this.handleUpdateItem.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.handleDonate = this.handleDonate.bind(this);
	}
	handleUpdateItem(e) {
		if(e.keyCode === 13) {
			this.handleAddItem();
		} else {
			e.target.value === '' ? this.setState({enableAddItem: false}) : this.setState({enableAddItem: true})
			this.setState({newItemName: e.target.value });
		}
	}
	handleAddItem() {
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
	handleRemoveItem(index){
		let newItemsArr = this.state.itemsAdded;
		newItemsArr.splice(index, 1);
		this.setState({itemsAdded: newItemsArr});
		this.state.itemsAdded.length === 0 && this.setState({enableDonation: false});
	}
	handleDonate(){
		console.log('hurray donation successfull!');
	}
	render() {
		const token = auth.getToken();
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
				<button className={this.state.enableDonation ? 'btn-donate' : 'btn-donate btn-disabled'} onClick={this.handleDonate}>DONATE</button>
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
		<input type="text"
			   placeholder="What would you like to donate ?"
			   className="new-donation-input new-donation-title text-lightgrey"
			   onKeyUp={props.onUpdateItem}
			   id='donationTitle'
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
