import React from 'react';
import Headline from '../Reusable/Headline';
import DonationHistoryList from './DonationHistoryList';
import DonationHistoryItem from './DonationHistoryItem';
import ScrollDownButton from '../Reusable/ScrollDownButton';
import { Element as ScrollDest } from 'react-scroll';

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

class DonationHistory extends React.Component {
  render() {
    const originalDonationList = this.props.donations.map((donation, i) =>
        <DonationHistoryList
          key={i}
          title={donation.participants.donor.name}
          date={convertDate(donation.created_at)}
        >
          {donation.items.map((item, index) =>
            <DonationHistoryItem
              key={index}
              quantity={item.quantity}
              unit={item.unit}
              title={item.description}
            />
          )}
        </DonationHistoryList>
      );
    return (
      <section className="donations-history">
        <Headline value="Donations History" />
        <ul className="donations-history__list">
          <ScrollDest name="donationList">
          {this.props.onSlice(originalDonationList)}
          </ScrollDest>
        </ul>
        <div
          href="#howto"
          className="intro__scrolldown text-center text-yellow pointer-cursor"
        >
          <ScrollDownButton
            destination="donationList"
            color="yellow"
            text="View More"
          />
        </div>
      </section>
    );
  }
}

DonationHistory.propTypes = {
  donations: React.PropTypes.array.isRequired
};

export default DonationHistory;
