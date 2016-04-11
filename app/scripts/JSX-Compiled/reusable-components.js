var Header = React.createClass({
	displayName: 'Header',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'header text-flex' },
			React.createElement(
				'h3',
				{ className: 'text-grey' },
				React.createElement(
					'a',
					{ href: '#' },
					'Food Taxi Logo'
				)
			),
			React.createElement(Login, null)
		);
	}
});

var Headline = React.createClass({
	displayName: 'Headline',

	render: function () {
		return React.createElement(
			'h1',
			{ className: 'text-center' },
			this.props.value
		);
	}
});

var Login = React.createClass({
	displayName: 'Login',

	render: function () {
		return React.createElement(
			'h3',
			{ className: 'text-margin-left' },
			React.createElement(
				'a',
				{ className: 'text-grey', href: '#signin' },
				'Login'
			)
		);
	}
});

var Footer = React.createClass({
	displayName: 'Footer',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'footer' },
			React.createElement(
				'p',
				null,
				'Made with ♥ by ',
				React.createElement(
					'a',
					{ href: 'http://hacksmiths.io' },
					'Team Hacksmiths'
				)
			)
		);
	}
});