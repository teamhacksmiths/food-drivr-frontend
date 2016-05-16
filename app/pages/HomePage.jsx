import React from 'react';
import SectionIntro from '../components/HomePage/SectionIntro.jsx';
import SectionHowTo from '../components/HomePage/SectionHowTo.jsx';
import SectionBecomeDriver from '../components/HomePage/SectionBecomeDriver.jsx';
import SectionComments from '../components/HomePage/SectionComments.jsx';
import SectionContacts from '../components/HomePage/SectionContacts.jsx';

const HomePage = () => (
	<div className="homepage">
		<SectionIntro />
		<SectionHowTo />
		<SectionBecomeDriver />
		<SectionComments />
		<SectionContacts />
	</div>
);

module.exports = HomePage;
