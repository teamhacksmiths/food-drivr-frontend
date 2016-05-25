import React from 'react';

const DonationHistoryList = ({ title, date, children }) => (
  <li>
    <header className="donations-history__titles">
      <h2 className="uppercase">{title}</h2>
      <i>{date}</i>
    </header>
    <div className="donations-history__items">
      {children}
    </div>
  </li>
);

DonationHistoryList.propTypes = {
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
};

module.exports = DonationHistoryList;
