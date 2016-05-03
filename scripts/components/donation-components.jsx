import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'react';
import {ScrollDownButton} from './reusable-components.jsx';
import auth from '../utils/auth.js';

var Donation = React.createClass({
	render: function(){
		return (
			<li className="row donation">
				<div className="col-xs-8">
					<h4>{this.props.title}</h4>
					<p>{this.props.date}</p>
				</div>
				{this.props.children}
			</li>
		);
	}
});

var DonationItem = React.createClass({
	render: function() {
		return (
			<div className="col-xs-4 text-right">
				<div className='donation-item'>{this.props.quantity} x {this.props.title}</div>
			</div>
		);
	}
});

var DonationsList = React.createClass({
	propTypes: {
		value: PropTypes.string.isRequired,
		addDonation: PropTypes.func.isRequired
	},
	getInitialState: function(){
		return {
			currentDonationTitle: '',
			donations: [
				{title: 'St Jude', date: 'March 22, 2016', items: [{quantity: 4, title: 'Tray of lasagne'}] },
				{title: 'City Mission', date: 'March 21, 2016', items: [{quantity: 3, title: 'Dozen bagels'},
																		{quantity: 3, title: 'Dozen donuts'}]}
			],
            date: ''
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
	updateNewDonation: function() {
		this.setState({currentDonation: document.getElementById('donation-name').value });
	},
	addDonation: function() {
		var arrayvar = this.state.donations.slice()
		arrayvar.push({title: this.state.currentDonation, date: this.state.date, items: [{quantity: 2, title: 'Test food 1'},
																						  {quantity: 5, title: 'Test food 2'}]});
		this.setState({ donations: arrayvar })
		document.getElementById('donation-name').value = '';
	},
	render: function() {
        const token = auth.getToken();
		var donations = this.state.donations.map(function(donation){
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
		return (
			<div className="donations">
				<h1 className='business-title text-center text-yellow'>BUSINESS NAME</h1>
				<div className="donation-input-container">
					<input type="text" placeholder="Enter Donation Here" className="donation-input text-lightgrey" id='donation-name' onKeyUp={this.updateNewDonation}/>
					<button onClick={this.addDonation} className="btn-add-donation text-center text-white">ADD</button>
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
