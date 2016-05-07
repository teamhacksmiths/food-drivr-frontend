import React from 'react';

const SignupButton = props => (
	<div onClick={props.onSubmit} className='btn-signup pointer-cursor'>
		<img src={props.imageSrc} alt={props.imageAlt}/>
		<button className='btn-signup' type='submit'>{props.title}</button>
	</div>
)

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
			<div className='signup-container text-center text-white' style={{background: '#ff1e40'}}>
				<p>Sign Up</p>
				<SignupButton
					onSubmit={this.handleSubmitDonor}
					imageSrc='images/donor-icon.svg'
					imgAlt='donor package'
					title='Donor'
					/>
				<p className='btn-signup'>OR</p>
				<SignupButton
					onSubmit={this.handleSubmitVolunteer}
					imageSrc='images/volunteer-icon.svg'
					imgAlt='volounteer package'
					title='Volunteer'
					/>
	 		</div>
		);
	}
}

SignUpPage.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = SignUpPage;
