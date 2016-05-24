import React from 'react';

const SignupButton = ({ title, onSubmit, imgSrc, imgAlt }) => (
	<section className="selection flex-grow-1 text-center">
		<img onClick={onSubmit} src={imgSrc} alt={imgAlt} />
		<span onClick={onSubmit}>{title}</span>
	</section>
);

class SignUpPage extends React.Component {
	constructor(context) {
		super(context);
		this.handleSubmitDonor = this.handleSubmitDonor.bind(this);
		this.handleSubmitVolunteer = this.handleSubmitVolunteer.bind(this);
	}
	handleSubmitDonor() {
		this.context.router.push('/signup/donor');
	}
	handleSubmitVolunteer() {
		this.context.router.push('/signup/volunteer');
	}
	render() {
		return (
			<article className="signup text-center text-white">
				<h1 className="uppercase">Sign Up</h1>
				<SignupButton
					onSubmit={this.handleSubmitDonor}
					imgSrc="images/donor-icon.svg"
					imgAlt="donor package"
					title="Donor"
				/>
			<p className="or flex-grow-1">OR</p>
				<SignupButton
					onSubmit={this.handleSubmitVolunteer}
					imgSrc="images/volunteer-icon.svg"
					imgAlt="volounteer package"
					title="Volunteer"
				/>
		</article>
		);
	}
}

SignUpPage.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = SignUpPage;
