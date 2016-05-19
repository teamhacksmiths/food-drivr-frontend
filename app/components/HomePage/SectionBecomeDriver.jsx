import React from 'react';
import AppStoreIcon from '../Reusable/AppStoreIcon.jsx';
import Arrow from './Arrow.jsx';
import Headline from '../Reusable/Headline.jsx';
import BodyButton from './BodyButton.jsx';
import DriverDescription from './DriverDescription.jsx';
import VolunteerDescription from './VolunteerDescription.jsx';

class SectionBecomeDriver extends React.Component {
	constructor() {
		super();
		this.state = {
			userType: 'Driver',
			description: ''
		};
	}

	onSubmitDriver() {
		this.setState({ userType: 'Driver' });
	}

	onSubmitVolunteer() {
		this.setState({ userType: 'Volunteer' });
	}

	render() {
		return (
			<div className="homepage-becomedriver">
				<AppStoreIcon className="becomedriver-appStoreIcon" />
				<Arrow direction="Left" onClick={this.state.userType === 'Driver' ? this.onSubmitVolunteer : this.onSubmitDriver} />
				<div className="becomedriver-content text-white">
					<Headline value={`Become a ${this.state.userType}`} className="becomedriver-title" />
					{this.state.userType === 'Driver' ?
						<DriverDescription /> :
						<VolunteerDescription />}
					<div className="button-container">
						<BodyButton />
					</div>
				</div>
				<div className="becomedriver-img" />
				<Arrow direction="Right" onClick={this.state.userType === 'Driver' ? this.onSubmitVolunteer : this.onSubmitDriver} />
			</div>
		);
	}
}

module.exports = SectionBecomeDriver;
