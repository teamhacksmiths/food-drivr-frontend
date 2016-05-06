import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'react';
import {ScrollDownButton} from './reusable-components.jsx';
import auth from '../utils/auth.js';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import classNames from 'classnames/bind';


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
        this.updateDonationName = this.updateDonationName.bind(this);
        this.addDonationItem = this.addDonationItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
	updateDonationName() {
		const newItemTitle = document.getElementById('donationTitle').value;
		newItemTitle === '' ? this.setState({enableAddItem: false}) : this.setState({enableAddItem: true})
		this.setState({newItemName: document.getElementById('donationTitle').value });
	}
	addDonationItem() {
		if (this.state.enableAddItem) {
			let newItemsArr = this.state.itemsAdded;
			const newItemTitle = document.getElementById('donationTitle').value;
			newItemsArr.push({name: this.state.newItemName});
			this.setState({itemsAdded: newItemsArr});
			this.setState({enableDonation: true});
			{/* Restore default status of the item input */}
			document.getElementById('donationTitle').value = '';
			this.setState({enableAddItem: false});
		}
	}
	removeItem(index){
		let newItemsArr = this.state.itemsAdded;
		newItemsArr.splice(index, 1);
		this.setState({itemsAdded: newItemsArr});
		if (this.state.itemsAdded.length === 0) {
			this.setState({enableDonation: false});
		}
	}
	makeDonation(){
		console.log('hurray donation successfull!');
	}
	render() {
		let donatedItems = this.state.itemsAdded.map(function(item, index){
			var boundClick = this.removeItem.bind(this, index);
			return (
				<DonationItem key={index} name={item.name} removeItem={boundClick}/>
			);
		}, this);
		return (
			<div className='donation-container'>
				<DonateItem enableAddItem={this.state.enableAddItem}
							addDonationItem={this.addDonationItem}
							updateDonationName={this.updateDonationName}
							updateDonationQty={this.updateDonationQty}
							updateDonationMeasure={this.updateDonationMeasure}
							/>
				<div className='donation-list'>
					{donatedItems}
				</div>
				<button className={this.state.enableDonation ? 'btn-donate' : 'btn-donate btn-disabled'} onClick={this.makeDonation}>DONATE</button>
			</div>
		);
	}
}


class DonationItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DonationItem';
    }
    render() {
        return (
        	<div className='donated-item text-flex'>
				<div className="donated-name text-lightgrey">{this.props.name}</div>
				<button className="btn-del-donation" onClick={this.props.removeItem} />
        	</div>
        );
    }
}


class DonateItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DonateItem';
    }
    render() {
        return (
        	<div className='text-flex'>
       			<input type="text"
					   placeholder="Enter Donation Here"
					   className="new-donation-input new-donation-title text-lightgrey"
					   onKeyUp={this.props.updateDonationName}
					   id='donationTitle'/>
        		<button className={this.props.enableAddItem ? "btn-donation" : "btn-donation btn-disabled"} onClick={this.props.addDonationItem} />
        	</div>
        );
    }
}


class DonationsList extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'DonationsList';
	}
	render() {
		const token = auth.getToken();
		return (
			<div className="donations">
				<h1 className='business-title text-center text-yellow'>BUSINESS NAME</h1>
				<Donation />
			</div>
		);
	}
}

module.exports = DonationsList;
