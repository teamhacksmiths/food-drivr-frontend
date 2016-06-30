import React from 'react';
import Headline from '../Reusable/Headline';
import DonationHistoryList from './DonationHistoryList';
import DonationHistoryItem from './DonationHistoryItem';

const convertDate = function convertDate(date) {
  const dateItems = date.split(/\-|T/i);
  const months = [
    'January', 'Febraury',
    'March', 'April',
    'May', 'June',
    'July', 'September',
    'October', 'November',
    'December'
  ];
  return `${months[parseInt(dateItems[1] - 1, 10)]} ${dateItems[2]}, ${dateItems[0]}`;
};

const DonationHistory = ({
  donations
}) => (
  <section className="donations-history">
    <Headline value="Donations History" />
    <ul className="donations-history__list">
      {donations.map((donation, index) =>
        <DonationHistoryList
          key={index}
          title={donation.participants.donor.name}
          date={convertDate(donation.created_at)}
        >
          {donation.items.map((item, i) =>
            <DonationHistoryItem
              key={i}
              quantity={item.quantity}
              unit={item.unit}
              title={item.description}
            />
          )}
        </DonationHistoryList>
      )}
    </ul>
  </section>
);

DonationHistory.propTypes = {
  donations: React.PropTypes.array.isRequired
};

export default DonationHistory;
