var SignUpPage = React.createClass({
	displayName: "SignUpPage",

	render: function () {
		return React.createElement(
			"div",
			{ className: "signup" },
			React.createElement(Header, null),
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(Headline, { value: "Sign Up as a Donor" }),
				React.createElement(SignUpForm, null)
			),
			React.createElement(Footer, null)
		);
	}
});

var SignUpForm = React.createClass({
	displayName: "SignUpForm",

	render: function () {
		return React.createElement(
			"form",
			{ action: "" },
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement("input", { type: "text", placeholder: "Name", id: "signup-name", className: "form-control" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement("input", { type: "text", placeholder: "Company", id: "signup-company", className: "form-control" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement("input", { type: "text", placeholder: "Address", required: true, id: "signup-address", className: "form-control" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement("input", { type: "tel", placeholder: "Phone", required: true, id: "signup-phone", className: "form-control" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement("input", { type: "email", placeholder: "Email", required: true, id: "signup-email", className: "form-control" })
			),
			React.createElement(
				"p",
				{ className: "text-center" },
				React.createElement(SignUpButton, null)
			)
		);
	}
});

var SignUpButton = React.createClass({
	displayName: "SignUpButton",

	render: function () {
		return React.createElement(
			"a",
			{ href: "/#donation", role: "button", className: "btn btn-info" },
			"Register"
		);
	}
});

ReactDOM.render(React.createElement(SignUpPage, null), document.getElementById('react'));