var HomePage = React.createClass({
	displayName: 'HomePage',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'homepage' },
			React.createElement(Header, null),
			React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(BodySection, null)
			),
			React.createElement(Footer, null)
		);
	}
});

var BodyButton = React.createClass({
	displayName: 'BodyButton',

	render: function () {
		return React.createElement(
			'a',
			{ href: '/#signup', role: 'button', className: 'btn btn-custom' },
			'Join Us'
		);
	}
});

var BodySection = React.createClass({
	displayName: 'BodySection',

	render: function () {
		return React.createElement(
			'div',
<<<<<<< HEAD
			{ className: 'well' },
=======
			{ className: 'homepage-content' },
			React.createElement(Headline, { value: 'Food Taxi Headline!' }),
>>>>>>> gabriele-master
			React.createElement(
				'p',
				{ className: 'lead text-center text-grey' },
				'Waste Not Food Taxi is simple. Organizations with leftover edible food sign up with our service and our volunteers are notified via an app to accept your donation. We send over a volunteer to pick up the food and get it to the nearest hunger relief partner.'
			),
			React.createElement(
<<<<<<< HEAD
				'span',
=======
				'div',
>>>>>>> gabriele-master
				{ className: 'text-center' },
				React.createElement(BodyButton, null)
			)
		);
	}
});