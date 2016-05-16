import React from 'react';
import Headline from '../Reusable/Headline.jsx';
import HowToDivTitle from './HowToDivTitle.jsx';

const SectionHowTo = () => (
	<div id="howto" className="homepage-howto">
		<Headline value="How It Works" className="howto-title text-center text-grey" />
		<div className="howto-content">
			<div className="howto-div">
				<HowToDivTitle title="DONATING" imgSrc="images/package.svg" imgAlt="donation package" />
				<p className="text-center source-sans">
					After signing up, donors can enter in items they wish to donate to those in need. Once items are donated, a notification is sent out to all drivers of a pending donation.
				</p>
			</div>
			<div className="howto-div">
				<HowToDivTitle title="PICKUP" imgSrc="images/truck.svg" imgAlt="pickup truck" />
				<p className="text-center source-sans">
					Drivers receive notification of a pending donation and can choose to accept. Upon accepting, they will be given all of the information about the pending donation.
				</p>
			</div>
			<div className="howto-div">
				<HowToDivTitle title="DELIVERY" imgSrc="images/delivery.svg" imgAlt="delivery truck" />
				<p className="text-center source-sans">
					After the pick up of a donation has been completed, drivers deliver the donation to the nearest pre-determined organization recipient.
				</p>
			</div>
		</div>
	</div>
);

module.exports = SectionHowTo;
