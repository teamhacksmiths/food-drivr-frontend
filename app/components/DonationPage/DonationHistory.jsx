import React from 'react';
import DonationHistoryList from './DonationHistoryList.jsx';
import DonationHistoryItem from './DonationHistoryItem.jsx';

const DonationHistory = ({ donations }) => (
	<div>
		<ul>
			{donations.map((donation) =>
					<DonationHistoryList title={donation.participants.donor.name} date={donation.created_at}>
							{donation.items.map((item) => <DonationHistoryItem quantity={item.quantity} unit={item.unit} title={item.description} />)}
					</DonationHistoryList>
			)}
		</ul>
	</div>
);

DonationHistory.propTypes = {
	donations: React.PropTypes.array.isRequired
};

module.exports = DonationHistory;
