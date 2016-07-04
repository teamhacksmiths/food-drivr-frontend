import React from 'react';
import Headline from '../Reusable/Headline';
import DonationHistoryList from './DonationHistoryList';
import DonationHistoryItem from './DonationHistoryItem';
import ScrollDownButton from '../Reusable/ScrollDownButton.jsx';
import { Element as ScrollDest } from 'react-scroll';

class DonationHistory extends React.Component {
  render() {
    const originalDonationList = this.props.donations.map((donation, i) =>
        <DonationHistoryList
          key={i}
          title={donation.participants.donor.name}
          date={this.props.convertDate(donation.created_at)}
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
          <ScrollDest name="donations">
            {this.props.donationList}
          </ScrollDest>
        </ul>
        <div
          href="#howto"
          className="intro__scrolldown text-center text-yellow pointer-cursor"
          onClick={this.props.onSlice.bind(null, 3)}
        >
      <ScrollDownButton
        destination="donations"
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
