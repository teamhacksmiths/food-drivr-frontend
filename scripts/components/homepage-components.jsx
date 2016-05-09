import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Headline} from './reusable-components.jsx';
import {ScrollDownButton} from './reusable-components.jsx';
import {AppStoreIcon} from './reusable-components.jsx';
import { Header } from './reusable-components.jsx';


class BodyButton extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'BodyButton';
	}
	render() {
		return (
			<Link to='/signup' role='button' className='button-home'>
				JOIN US
			</Link>
		);
	}
}

var SectionIntro = React.createClass({
	render: function(){
		return (
			<div className='homepage-intro'>
				<div className='text-center text-white'>
					<img src='images/fd-logo.svg' alt='food drivr logo' className='fd-logo'/>
					<p className='homepage-logotitle'>
						FOOD DRIVR
					</p>
					<p className='homepage-powered'>
						Powering Donations For
					</p>
				</div>
				<Headline value='WASTE NOT FOOD TAXI' className='homepage-title text-center text-white'/>
				<p className='homepage-content text-center text-white source-sans'>
					On a daily basis, businesess like catering facilities, restaurants, grocery stores, as well as individuals produce more food than what is necessary for them to meet their needs.
					<br/>
					<br/>
					Organizations that utilize Food Drivr help deliver this excess to people in need.
					<br/>
					Join us and help end hunger.
				</p>
				<br/>
				<div className='button-container text-center'>
					<BodyButton />
				</div>
				<a href='#howto' className='homepage-scrolldown text-center text-white pointer-cursor'>
					<ScrollDownButton destination='' color='white' text='LEARN MORE'/>
				</a>
			</div>
		);
	}
});

var HowToDivTitle = React.createClass({
	render: function() {
		return (
			<div className='howto-divtitle text-center'>
				<img src={this.props.imgSrc} alt={this.props.imgAlt} className='howto-img'/>
				<p>{this.props.title}</p>
			</div>
		);
	}
});

var SectionHowTo = React.createClass({
	render: function(){
		return (
			<div id='howto' className='homepage-howto'>
				<Headline value='How It Works' className='howto-title text-center text-grey'/>
				<div className='howto-content'>
					<div className='howto-div'>
						<HowToDivTitle title='DONATING' imgSrc='images/package.svg' imgAlt='donation package' />
						<p className='text-center source-sans'>
							After signing up, donors can enter in items they wish to donate to those in need. Once items are donated, a notification is sent out to all drivers of a pending donation.
						</p>
					</div>
					<div className='howto-div'>
						<HowToDivTitle title='PICKUP' imgSrc='images/truck.svg' imgAlt='pickup truck' />
						<p className='text-center source-sans'>
							Drivers receive notification of a pending donation and can choose to accept. Upon accepting, they will be given all of the information about the pending donation.
						</p>
					</div>
					<div className='howto-div'>
						<HowToDivTitle title='DELIVERY' imgSrc='images/delivery.svg' imgAlt='delivery truck' />
						<p className='text-center source-sans'>
							After the pick up of a donation has been completed, drivers deliver the donation to the nearest pre-determined organization recipient.
						</p>
					</div>
				</div>
			</div>
		);
	}
});

var Arrow = React.createClass({
	render: function(){
		return (
			<div className='becomedriver-arrow'>
				<img className='pointer-cursor' onClick={this.props.onClick} src={'images/' + this.props.direction + '-Arrow.svg'} alt={this.props.direction + ' arrow'}/>
			</div>
		);
	}
});

var DriverDescription = React.createClass({
	render: function() {
		return (
			<div className='source-sans' style={{marginBottom: 40}}>
				<p>There are people who would rather see their extra food do some good instead of going to waste! We accept donations from business such as catering companies & facilites, restaurants and forcery stores, as well as donations from individuals.</p>
				<p>As an extra benefit to all of our donors, we provide tax receipts to them so they can write their donations off when they do their taxes.</p>
				<p>Food Drivr provides an easy way for both drivers and donors to help put an end to hunger in their communities.</p>
			</div>
		);
	}
});

var VolunteerDescription = React.createClass({
	render: function() {
		return (
			<div className='source-sans' style={{marginBottom: 40}}>
				<p>There are people who would rather see their extra food do some good instead of going to waste! We accept donations from business such as catering companies & facilites, restaurants and forcery stores, as well as donations from individuals.</p>
				<p>Some other text for volunteers!</p>
			</div>
		);
	}
});

var SectionBecomeDriver = React.createClass({
	getInitialState: function() {
		return {
			userType: 'Driver',
			description : ''
		};
	},
	onSubmitDriver: function() {
		this.setState({ userType: 'Driver' });
	},
	onSubmitVolunteer: function() {
		this.setState({ userType: 'Volunteer' });
	},
	render: function(){
		return (
			<div className='homepage-becomedriver'>
				<AppStoreIcon className='becomedriver-appStoreIcon'/>
				<Arrow direction='Left' onClick={this.state.userType === 'Driver' ? this.onSubmitVolunteer : this.onSubmitDriver}/>
				<div className='becomedriver-content text-white'>
					<Headline value={'Become a ' + this.state.userType} className='becomedriver-title'/>
					{ this.state.userType === 'Driver' ?
						<DriverDescription /> :
						<VolunteerDescription /> }
					<div className='button-container'>
						<BodyButton />
					</div>
				</div>
				<div className='becomedriver-img' />
				<Arrow direction='Right' onClick={this.state.userType === 'Driver' ? this.onSubmitVolunteer : this.onSubmitDriver}/>
			</div>
		);
	}
});

var Comment = React.createClass({
	render: function(){
		return (
			<div className='comments-container'>
				<p>{this.props.text}</p>
				<div className='comments-author'>
					{this.props.author}
				</div>
				<div className='comments-company'>
					{this.props.company}
				</div>
			</div>
		);
	}
});

var SectionComments = React.createClass({
	getInitialState: function() {
		return {
			text: "We're so happy you came in! We've been throwing away hundreds of cupcakes and it just makes us sick. Thank you for what you're doing.",
			author : 'CARLOS ESTRADA',
			company: 'Jones Brothers Cupcakes',
			item: 0
		};
	},
	selectItem: function(value) {
		this.setState({ item: value });
		if (value === 0) {
			this.setState({ text: "We're so happy you came in! We've been throwing away hundreds of cupcakes and it just makes us sick. Thank you for what you're doing.",
							author: 'CARLOS ESTRADA',
							company: 'Jones Brothers Cupcakes' });
		} else if (value === 1) {
			this.setState({ text: "Some more text about someone from a random company 1 should go here!",
							author: 'NAME LASTNAME 1',
							company: 'Super Company 1' });
		} else {
			this.setState({ text: "A different kind of text about someone from a random company 2 should go here!",
							author: 'NAME LASTNAME 2',
							company: 'Super Company 2' });
		}
	},
	isActive: function(value) {
		return ((this.state.item === value) ? 'active-bullet ' : '') + 'bullet pointer-cursor';
	},
	render: function(){
		return (
			<div className='homepage-comments text-center text-white'>
				<Comment text={this.state.text} author={this.state.author} company={this.state.company}/>
				<div className='comments-dots'>
					<div className={this.isActive(0)} onClick={this.selectItem.bind(this,0)}/>
					<div className={this.isActive(1)} onClick={this.selectItem.bind(this,1)}/>
					<div className={this.isActive(2)} onClick={this.selectItem.bind(this,2)}/>
				</div>
			</div>
		);
	}
});

var SectionContacts = React.createClass({
	render: function(){
		return (
			<div className='homepage-contacts text-white'>
				<p>If you have any question or comments, please don&#39;t hesitate to contact us.</p>
				<p>1 650-253-0000</p>

				<div className='email'>
					susie@benefitbrownies.organization
				</div>
				<div className='contacts-social'>
					<Link to='' role='button'>
						<img src='images/facebook-icon-footer.svg' alt='facebook icon' className='social-icon'/>
					</Link>
					<Link to='' role='button'>
						<img src='images/Twitter-Icon-footer.svg' alt='twitter icon' className='social-icon'/>
					</Link>
				</div>
				<div className='copyright text-center'>
					© Copyright Benefit Brownies 2016
				</div>
			</div>
		);
	}
});

var HomePage = React.createClass({
	render: function(){
		return (
			<div>
				<Header />
				<div className='homepage'>
					<SectionIntro />
					<SectionHowTo />
					<SectionBecomeDriver />
					<SectionComments />
					<SectionContacts />
				</div>
			</div>
		);
	}
});

module.exports = HomePage;