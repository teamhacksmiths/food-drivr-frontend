import React from 'react';
import { Headline, AppStoreIcon, WhiteTruckButton } from '../components/reusable-components.jsx';
import auth from '../utils/auth.js';

class ThankYou extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			role: parseInt(localStorage.getItem('role'), 10),
			loggedIn: auth.loggedIn()
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentWillMount() {
		if (!this.state.loggedIn || !this.props.location.query.userType) {
			this.context.router.push('/');
		} else if (this.state.role && this.props.location.query.userType !== 'volunteer') {
			this.context.router.push('/thankyou?userType=volunteer');
		} else if (!this.state.role && this.props.location.query.userType !== 'donor') {
			this.context.router.push('/thankyou?userType=donor');
		} else {
			this.context.router.push('/');
		}
	}
	handleClick() {
		this.context.router.push('/donation');
	}
	render() {
		const userType = this.props.location.query.userType;
		return (
			<div className="text-center text-white">
				<WhiteTruckButton />
				<Headline className="thankyou-header" value="Thank You!" />
				{this.state.role ? <VolunteerThankYou /> : <DonorThankYou />}
				{this.state.role ? '' : <DonateButton onClick={this.handleClick} />}
				<AppStoreIcon className="thankyou-appstore-icon" />
			</div>
		);
	}
}

const VolunteerThankYou = props => (
	<div style={{ maxWidth: 500, width: '80%', margin: 'auto', marginBottom: 50, fontSize: '2em', fontFamily: 'Open Sans, sans-serif', letterSpacing: 1 }}>
		<p>
			We really apprecaite you taking the time to sign up and offering your time and effort in helping us eliminate food waste.
		</p>
		<p>
			Please follow the link below to download the app from the App Store, sign in and you’re ready to go to begin delivering much needed food to those in need.
		</p>
		<p>
			We will be in contact with you very soon.
		</p>
		<p>
			Thank you again!
		</p>
	</div>
);

const DonorThankYou = props => (
	<div style={{ maxWidth: 500, width: '80%', margin: 'auto', marginBottom: 50, fontSize: '2em', fontFamily: 'Open Sans, sans-serif', letterSpacing: 1 }}>
		<p>
			We really apprecaite you taking the time to sign up and offering your time and effort in helping us eliminate food waste.
		</p>
		<p>
			Your generous donations will help us in our goal of eliminating hunger in this country.
		</p>
		<p>
			You have two options for initiating a donation.  You can do it via the web, click the link below, or download the iOS app from the App Store.
		</p>
		<p>
			Thank you again!
		</p>
	</div>
);

const DonateButton = props => (
	<button className="thankyou-btn-donate" onClick={props.onClick}>
		DONATE
	</button>
);

ThankYou.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = ThankYou;
