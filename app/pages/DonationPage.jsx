import React from 'react';
import { Link } from 'react-router';
import auth from '../utils/auth.js';
import PendingDonations from '../components/DonationPage/PendingDonations.jsx';
import DonationConfirmation from '../components/DonationPage/DonationConfirmation.jsx';
import DonationHistory from '../components/DonationPage/DonationHistory.jsx';

class DonationPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			donations: [],
			newItemName: '',
			itemsAdded: [],
			enableAddItem: false,
			enableDonation: false
		};
		this.handleOpen = this.handleOpen.bind(this);
		this.handleUpdateItem = this.handleUpdateItem.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
	}

	componentWillMount() {
		const role = localStorage.getItem('role');
		if (parseInt(role, 10) !== 0) {
			this.context.router.push('/');
		}
	}

	componentDidMount() {
		auth.getDonation().then((response) => {
			console.log(response);
			this.setState({ donations: response.data.donations });
		})
		.catch((err) => {
			console.log(err);
		});
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
		if (!el.classList.contains('btn-disabled')) {
			this.setState({ open: true });
		}
	}

	render() {
		return (
		<div>
			<PendingDonations
				enableAddItem={this.state.enableAddItem}
				onAddItem={this.handleAddItem}
				onUpdateItem={this.handleUpdateItem}
				itemsAdded={this.state.itemsAdded}
				enableDonation={this.state.enableDonation}
				onHandleOpen={this.handleOpen}
				onHandleRemoveItem={this.handleRemoveItem}
			/>
			<DonationConfirmation />
			<DonationHistory
				donations={this.state.donations}
			/>
		</div>
		);
	}
}

DonationPage.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = DonationPage;
