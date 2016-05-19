import React from 'react';
import Headline from './Reusable/Headline.jsx';
import AppStoreIcon from './Reusable/AppStoreIcon.jsx';
import WhiteTruckButton from './Reusable/WhiteTruckButton.jsx';
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
		console.log('Hello from Thank You!');
		console.log(`Current role is ${this.state.role}`);
		if (this.state.role !== 1) {
			this.context.router.push('/thankyou?userType=donor');
		} else if (this.state.role !== 0) {
			this.context.router.push('/thankyou?userType=volunteer');
		} else {
			console.log('No Role?');
			this.context.router.push('/');
		}
	}
	handleClick() {
		if (this.state.role !== 1) {
			auth.login(localStorage.getItem('email'), localStorage.getItem('password'))
				.then((response) => {
					console.log('hello from login');
					console.log(response);
					localStorage.setItem('token', response.data.authtoken.auth_token);
					return auth.getUser();
				})
				.then((response) => {
					console.log(response);
					console.log(response.data.user.role_id);
					localStorage.setItem('role', response.data.user.role_id);
					localStorage.setItem('name', response.data.user.name);
					if (auth.loggedIn()) {
						this.context.router.push('/donation');
						auth.onChange(true);
					}
				})
				.catch((err) => {
					console.log(err);
					this.context.router.push('/');
				});
		} else {
			this.context.router.push('/');
		}
	}
	render() {
		return (
			<div className="text-center text-white">
				<WhiteTruckButton />
				<Headline className="thankyou-header" value="Thank You!" />
				{this.state.role !== 0 ? <VolunteerThankYou /> : <DonorThankYou />}
				{this.state.role ? '' : <DonateButton onClick={this.handleClick} />}
				{this.state.role !== 1 ? '' : <AppStoreIcon className="thankyou-appstore-icon" />}
			</div>
		);
	}
}

const VolunteerThankYou = () => (
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

const DonorThankYou = () => (
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

const DonateButton = (props) => (
	<button className="thankyou-btn-donate" onClick={this.props.onClick}>
		GET STARTED
	</button>
);

ThankYou.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = ThankYou;
