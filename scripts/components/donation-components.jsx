import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'react';
import {ScrollDownButton} from './reusable-components.jsx';
import auth from '../utils/auth.js';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import classNames from 'classnames/bind';

var Donation = React.createClass({
	render: function(){
		return (
			<li className="donation">
				<div className="donation-name">
					<h4>{this.props.title}</h4>
					<p>{this.props.date}</p>
				</div>
				<div className="donation-items">
					{this.props.children}
				</div>
			</li>
		);
	}
});

var DonationItem = React.createClass({
	render: function() {
		return (
			<div className='donation-item text-right'>{this.props.quantity} {this.props.measure} of {this.props.title}</div>
		);
	}
});

var DonationsList = React.createClass({
	propTypes: {
		value: PropTypes.string.isRequired,
		addDonation: PropTypes.func.isRequired
	},
	getInitialState(){
		return {
			currentDonationCharity: '',
			currentDonationTitle: '',
			currentDonationMeasure: 'Oz',
			currentDonationQty: 0,
			currentDonations: [],
			donations: [
				{title: 'St Jude', date: 'March 22, 2016', items: [{quantity: 4, title: 'Tray of lasagne'}] },
				{title: 'City Mission', date: 'March 21, 2016', items: [{quantity: 3, title: 'Dozen bagels'},
																		{quantity: 3, title: 'Dozen donuts'}]}
			],
			date: '',
			enableAddItem: false
		};
	},
	componentWillMount() {
		auth.onChange(true);
		var monthNames = [
			"January", "February", "March",
			"April", "May", "June", "July",
			"August", "September", "October",
			"November", "December"
		];

		var date = new Date();
		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();
		var currentDate = monthNames[monthIndex] + ' ' + day + ', ' + year;
		this.setState({ date: currentDate });
	},
	updateNewDonation() {
		if (document.getElementById('donation-name').value !== '' && document.getElementById('donation-qty').value !== '') {
			this.setState({enableAddItem: true});
		} else {
			this.setState({enableAddItem: false});
		}
		this.setState({currentDonationTitle: document.getElementById('donation-name').value });
	},
	updateNewDonationCharity() {
		this.setState({currentDonationCharity: document.getElementById('donation-charity').value });
	},
	updateDonationQty() {
		if (document.getElementById('donation-name').value !== '' && document.getElementById('donation-qty').value !== '') {
			this.setState({enableAddItem: true});
		} else {
			this.setState({enableAddItem: false});
		}
		this.setState({currentDonationQty: document.getElementById('donation-qty').value });
	},
	updateDonationMeasure() {
		this.setState({currentDonationMeasure: document.getElementById('donation-measure').value});
	},
	addDonationItem() {
		if (this.state.enableAddItem) {
			let donationsArray = this.state.currentDonations.slice();
			donationsArray.push({title: this.state.currentDonationTitle, quantity: this.state.currentDonationQty, measure: this.state.currentDonationMeasure});
			this.setState({ currentDonations: donationsArray,
							currentDonationTitle: '',
							currentDonationQty: ''});
			document.getElementById('donation-name').value = '';
			document.getElementById('donation-qty').value = '';
			this.setState({enableAddItem: false});
		}
	},
	render() {
		const token = auth.getToken();
		let donations = this.state.donations.map(function(donation){
			return (
				<Donation title={donation.title} date={donation.date}>
					{
						donation.items.map(function(item){
							return <DonationItem quantity={item.quantity} title={item.title} />;
						})
					}
				</Donation>
			);
		});

		let currentDonations = this.state.currentDonations.map(function(currentDonation) {
			return <DonationItem quantity={currentDonation.quantity} title={currentDonation.title} measure={currentDonation.measure}/>
		});


		let addBtnClass = classNames({
			'btn-add-donation': true,
			'text-center': true,
			'text-white': true,
			'btn-add-donation-disabled': !this.state.enableAddItem
		});

		return (
			<div className="donations">
				<h1 className='business-title text-center text-yellow'>BUSINESS NAME</h1>
				<div className="donation-input-container">
					<input type="text" placeholder="Enter Donation Charity" className="donation-input-charity text-lightgrey" id='donation-charity' onKeyUp={this.updateNewDonationCharity}/>
					<input type="text" placeholder="Enter Donation Here" className="donation-input-name text-lightgrey" id='donation-name' onKeyUp={this.updateNewDonation}/>
					<input type="text" placeholder="Enter Qty" className="donation-input-qty text-lightgrey" id='donation-qty' onKeyUp={this.updateDonationQty}/>
					<select className='donation-input-measure' id='donation-measure' onChange={this.updateDonationMeasure}>
						<option value='oz'>Oz</option>
						<option value='gm'>Gm</option>
						<option value='kg'>Kg</option>
						<option value='lb'>Lb</option>
					</select>
					<button onClick={this.addDonationItem} className={addBtnClass}>ADD</button>
				</div>
				<div className="donation-new">
					<Donation title={this.state.currentDonationCharity} date={this.state.date}>
						{currentDonations}
					</Donation>
				</div>
				<div className="past-donations">
					<h4 className="text-left">Donations to Date</h4>
					<ul id='donations-list'>
						{donations}
					</ul>
					<div className="donation-scrolldown text-center text-yellow pointer-cursor">
						<ScrollDownButton destination='' color='yellow' text='VIEW MORE'/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = DonationsList;
