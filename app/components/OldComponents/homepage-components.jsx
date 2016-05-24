import React from 'react';
import { Link } from 'react-router';

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
