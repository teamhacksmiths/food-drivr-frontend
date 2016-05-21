import React from 'react';
import { Link } from 'react-router';
import { Headline, ScrollDownButton, AppStoreIcon } from './reusable-components.jsx';


class BodyButton extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'BodyButton';
	}
	render() {
		return (
			<Link to="/signup" role="button" className="uppercase btn-round btn-red">
				Join us
			</Link>
		);
	}
}

var Intro = React.createClass({
	render() {
		return (
			<article className="intro">
				<header className="text-center text-white">
					<div title="food drivr logo" className="truck-white"></div>
					<p className="uppercase">
						Food drivr
					</p>
					<p className="powered">
						Powering Donations For
					</p>
					<Headline value="Waste not food taxi" className="uppercase title text-center text-white" />
				</header>
				<section className="content flex-grow-1 text-center text-white source-sans">
					<p>
						On a daily basis, businesess like catering facilities, restaurants, grocery stores, as well as individuals produce more food than what is necessary for them to meet their needs.
					</p>
					<p>
						Organizations that utilize Food Drivr help deliver this excess to people in need.
					</p>
					<p>
						Join us and help end hunger.
					</p>
				</section>
				<section className="flex-grow-3 text-center">
					<BodyButton />
				</section>
				<footer href="#howto" className="scrolldown text-center text-white pointer-cursor">
					<ScrollDownButton destination="" color="white" text="Learn more" />
				</footer>
			</article>
		);
	}
});

var HowItWorksSection = React.createClass({
	propTypes: {
		imgSrc: React.PropTypes.string.isRequired,
		imgAlt: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired
	},
	render() {
		return (
			<section>
				<header className="text-center">
					<img src={this.props.imgSrc} alt={this.props.imgAlt} className="img" />
					<div className="uppercase">{this.props.title}</div>
				</header>
				<p className="text-center source-sans">
					{this.props.children}
				</p>
			</section>
		);
	}
});

var HowItWorks = React.createClass({
	render() {
		return (
			<article id="howItWorks" className="howItWorks bg-white">
				<Headline value="How it works" className="title text-center text-grey" />
				<div className="content">
					<HowItWorksSection title="donating" imgSrc="images/package.svg" imgAlt="donation package">
						After signing up, donors can enter in items they wish to donate to those in need. Once items are donated, a notification is sent out to all drivers of a pending donation.
					</HowItWorksSection>
					<HowItWorksSection title="pickup" imgSrc="images/truck.svg" imgAlt="pickup truck">
						Drivers receive notification of a pending donation and can choose to accept. Upon accepting, they will be given all of the information about the pending donation.
					</HowItWorksSection>
					<HowItWorksSection title="delivery" imgSrc="images/delivery.svg" imgAlt="delivery truck">
						After the pick up of a donation has been completed, drivers deliver the donation to the nearest pre-determined organization recipient.
					</HowItWorksSection>
				</div>
			</article>
		);
	}
});

var Arrow = React.createClass({
	propTypes: {
		onClick: React.PropTypes.func.isRequired,
		direction: React.PropTypes.string.isRequired
	},
	render() {
		return (
			<div className="arrow">
				<img className="pointer-cursor" onClick={this.props.onClick} src={`images/${this.props.direction}-Arrow.svg`} alt={`${this.props.direction} arrow`} />
			</div>
		);
	}
});

const DriverDescription = () => (
	<div className="source-sans" style={{ marginBottom: 40 }}>
		<p>There are people who would rather see their extra food do some good instead of going to waste! We accept donations from business such as catering companies & facilites, restaurants and forcery stores, as well as donations from individuals.</p>
		<p>As an extra benefit to all of our donors, we provide tax receipts to them so they can write their donations off when they do their taxes.</p>
		<p>Food Drivr provides an easy way for both drivers and donors to help put an end to hunger in their communities.</p>
	</div>
);

const VolunteerDescription = () => (
	<div className="source-sans" style={{ marginBottom: 40 }}>
		<p>There are people who would rather see their extra food do some good instead of going to waste! We accept donations from business such as catering companies & facilites, restaurants and forcery stores, as well as donations from individuals.</p>
		<p>Some other text for volunteers!</p>
	</div>
);

var BecomeA = React.createClass({
	getInitialState() {
		return {
			userType: 'Driver'
		};
	},
	onSubmitDriver() {
		this.setState({ userType: 'Driver' });
	},
	onSubmitVolunteer() {
		this.setState({ userType: 'Volunteer' });
	},
	render() {
		return (
			<article className="becomeA bg-grey-dark">
				<Arrow direction="Left" onClick={this.state.userType === 'Driver' ? this.onSubmitVolunteer : this.onSubmitDriver} />
				<section className="text-white">
					<Headline value={`Become a ${this.state.userType}`} className="title" />
					{this.state.userType === 'Driver' ?
						<DriverDescription /> :
						<VolunteerDescription />}
					<BodyButton />
				</section>
				<AppStoreIcon className="appstore" />
				<div className="app-sample" />
				<Arrow direction="Right" onClick={this.state.userType === 'Driver' ? this.onSubmitVolunteer : this.onSubmitDriver} />
			</article>
		);
	}
});

var Comment = React.createClass({
	propTypes: {
		text: React.PropTypes.string.isRequired,
		author: React.PropTypes.string.isRequired,
		company: React.PropTypes.string.isRequired
	},
	render() {
		return (
			<section className="comment">
				<p>{this.props.text}</p>
				<div className="author">
					{this.props.author}
				</div>
				<div className="company">
					{this.props.company}
				</div>
			</section>
		);
	}
});

var Comments = React.createClass({
	getInitialState() {
		return {
			text: "We're so happy you came in! We've been throwing away hundreds of cupcakes and it just makes us sick. Thank you for what you're doing.",
			author: 'CARLOS ESTRADA',
			company: 'Jones Brothers Cupcakes',
			item: 0
		};
	},
	selectItem(value) {
		this.setState({ item: value });
		if (value === 0) {
			this.setState({ text: "We're so happy you came in! We've been throwing away hundreds of cupcakes and it just makes us sick. Thank you for what you're doing.",
							author: 'CARLOS ESTRAD',
							company: 'Jones Brothers Cupcakes' });
		} else if (value === 1) {
			this.setState({ text: 'Some more text about someone from a random company 1 should go here!',
							author: 'NAME LASTNAME 1',
							company: 'Super Company 1' });
		} else {
			this.setState({ text: 'A different kind of text about someone from a random company 2 should go here!',
							author: 'NAME LASTNAME 2',
							company: 'Super Company 2' });
		}
	},
	isActive(value) {
		return `${((this.state.item === value) ? 'bullet--active ' : '')} bullet pointer-cursor`;
	},
	render() {
		return (
			<article className="comments text-center text-white">
				<Comment text={this.state.text} author={this.state.author} company={this.state.company} />
				<div className="dots">
					<div className={this.isActive(0)} onClick={this.selectItem.bind(this,0)} />
					<div className={this.isActive(1)} onClick={this.selectItem.bind(this,1)} />
					<div className={this.isActive(2)} onClick={this.selectItem.bind(this,2)} />
				</div>
			</article>
		);
	}
});

const Contacts = () => (
	<article className="contacts text-white">
		<p>If you have any question or comments, please don't hesitate to contact us.</p>
		<p>1 650-253-0000</p>

		<section className="email">
			susie@benefitbrownies.organization
		</section>
		<section>
			<Link to="" role="button">
				<img src="images/facebook-icon-footer.svg" alt="facebook icon" className="social-icon" />
			</Link>
			<Link to="" role="button">
				<img src="images/Twitter-Icon-footer.svg" alt="twitter icon" className="social-icon" />
			</Link>
		</section>
		<footer className="copyright text-center">
			© Copyright Benefit Brownies 2016
		</footer>
	</article>
);

const HomePage = () => 	(
	<div>
		<Intro />
		<HowItWorks />
		<BecomeA />
		<Comments />
		<Contacts />
	</div>
);

module.exports = HomePage;
