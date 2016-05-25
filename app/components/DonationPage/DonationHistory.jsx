import React from 'react';
import Headline from '../Reusable/Headline';
import DonationHistoryList from './DonationHistoryList';
import DonationHistoryItem from './DonationHistoryItem';

const DonationHistory = ({ donations }) => (
  <section className="donations-history">
    <Headline value="Donations History" />
    <ul className="donations-history__list">
      {donations.map((donation) =>
        <DonationHistoryList title={donation.participants.donor.name} date={donation.created_at}>
          {donation.items.map((item) => <DonationHistoryItem quantity={item.quantity} unit={item.unit} title={item.description} />)}
        </DonationHistoryList>
      )}
    </ul>
  </section>
);

DonationHistory.propTypes = {
  donations: React.PropTypes.array.isRequired
};

module.exports = DonationHistory;
