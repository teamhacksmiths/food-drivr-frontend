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
        React.createElement("input", { type: "text", placeholder: "Address", id: "signup-address", className: "form-control" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("input", { type: "tel", placeholder: "Phone", id: "signup-phone", className: "form-control" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("input", { type: "email", placeholder: "Email", id: "signup-email", className: "form-control" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("input", { type: "password", placeholder: "Password", id: "signup-password", className: "form-control" })
      ),
      React.createElement(SignUpButton, null)
    );
  }
});

var SignUpButton = React.createClass({
  displayName: "SignUpButton",

  render: function () {
    return React.createElement(
      "button",
      { type: "submit", className: "btn btn-custom" },
      "Register"
    );
  }
});