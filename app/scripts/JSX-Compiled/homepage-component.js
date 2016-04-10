var HomePage = React.createClass({
	displayName: "HomePage",

	render: function () {
		return React.createElement(
			"div",
			{ className: "homepage" },
			React.createElement(Header, null),
			React.createElement(BodySection, null),
			React.createElement(Footer, null)
		);
	}
});

var Header = React.createClass({
	displayName: "Header",

	render: function () {
		return React.createElement(
			"div",
			{ className: "header text-flex" },
			React.createElement(
				"h3",
				{ className: "text-grey" },
				"Food Taxi Logo"
			),
			React.createElement(Login, null)
		);
	}
});

var Login = React.createClass({
	displayName: "Login",

	render: function () {
		return React.createElement(
			"h3",
			{ className: "text-margin-left" },
			React.createElement(
				"a",
				{ className: "text-grey", href: "#" },
				"Login"
			)
		);
	}
});

var BodySection = React.createClass({
	displayName: "BodySection",

	render: function () {
		return React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"h1",
				{ className: "text-center" },
				"Food Taxi Headline!"
			),
			React.createElement(
				"p",
				{ className: "lead text-center text-grey" },
				"Waste Not Food Taxi is simple. Organizations with leftover edible food sign up with our service and our volunteers are notified via an app to accept your donation. We send over a volunteer to pick up the food and get it to the nearest hunger relief partner."
			),
			React.createElement(
				"p",
				{ className: "text-center" },
				React.createElement(BodyButton, null)
			)
		);
	}
});

var BodyButton = React.createClass({
	displayName: "BodyButton",

	render: function () {
		return React.createElement(
			"button",
			{ className: "btn btn-custom", href: "#" },
			"Join Us"
		);
	}
});

var Footer = React.createClass({
	displayName: "Footer",

	render: function () {
		return React.createElement(
			"div",
			{ className: "footer" },
			React.createElement(
				"p",
				null,
				"Made with ♥ by ",
				React.createElement(
					"a",
					{ href: "http://hacksmiths.io" },
					"Team Hacksmiths"
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(HomePage, null), document.getElementById('react'));