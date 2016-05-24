import React from 'react';
import Headline from '../Reusable/Headline.jsx';
import SubSectionHowItWorks from './SubSectionHowItWorks.jsx';

const SectionHowItWorks = () => (
    <section id="howItWorks" className="howItWorks bg-white">
        <Headline value="How it works" className="title text-center text-grey-dark" />
        <div className="content">
            <SubSectionHowItWorks title="donating" imgSrc="images/package.svg" imgAlt="donation package">
                After signing up, donors can enter in items they wish to donate to those in need. Once items are donated, a notification is sent out to all drivers of a pending donation.
            </SubSectionHowItWorks>
            <SubSectionHowItWorks title="pickup" imgSrc="images/truck.svg" imgAlt="pickup truck">
                Drivers receive notification of a pending donation and can choose to accept. Upon accepting, they will be given all of the information about the pending donation.
            </SubSectionHowItWorks>
            <SubSectionHowItWorks title="delivery" imgSrc="images/delivery.svg" imgAlt="delivery truck">
                After the pick up of a donation has been completed, drivers deliver the donation to the nearest pre-determined organization recipient.
            </SubSectionHowItWorks>
        </div>
    </section>
);

module.exports = SectionHowItWorks;
