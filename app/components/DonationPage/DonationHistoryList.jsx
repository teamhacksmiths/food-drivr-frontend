import React from 'react';

const DonationHistoryList = ({ title, date, children }) => (
	<li className="row donation">
		<div className="col-xs-8">
			<h4>{title}</h4>
			<p>{date}</p>
		</div>
		{children}
	</li>
);

DonationHistoryList.propTypes = {
	title: React.PropTypes.string.isRequired,
	date: React.PropTypes.string.isRequired,
};

module.exports = DonationHistoryList;
