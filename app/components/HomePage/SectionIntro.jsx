import React from 'react';
import Headline from '../Reusable/Headline.jsx';
import BodyButton from '../Reusable/BodyButton.jsx';
import ScrollDownButton from '../Ruesable/ScrollDownButton.jsx';

const SectionIntro = () => (
	<div className="homepage-intro">
		<div className="text-center text-white">
			<img src="images/fd-logo.svg" alt="food drivr logo" className="fd-logo" />
			<p className="homepage-logotitle">
				FOOD DRIVR
			</p>
			<p className="homepage-powered">
				Powering Donations For
			</p>
		</div>
		<Headline value="WASTE NOT FOOD TAXI" className="homepage-title text-center text-white" />
		<p className="homepage-content text-center text-white source-sans">
			On a daily basis, businesess like catering facilities, restaurants, grocery stores, as well as individuals produce more food than what is necessary for them to meet their needs.
			<br />
			<br />
			Organizations that utilize Food Drivr help deliver this excess to people in need.
			<br />
			Join us and help end hunger.
		</p>
		<br />
		<div className="button-container text-center">
			<BodyButton />
		</div>
		<a href="#howto" className="homepage-scrolldown text-center text-white pointer-cursor">
			<ScrollDownButton destination="" color="white" text="LEARN MORE" />
		</a>
	</div>
);

module.exports = SectionIntro;
