var SignInPage = React.createClass({
    displayName: "SignInPage",

    render: function () {
        return React.createElement(
            "div",
            { className: "signin" },
            React.createElement(Header, null),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(Headline, { value: "Sign In" }),
                React.createElement(SignInForm, null)
            ),
            React.createElement(Footer, null)
        );
    }
});

var SignInForm = React.createClass({
    displayName: "SignInForm",

    render: function () {
        return React.createElement(
            "form",
            { action: "" },
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
            React.createElement(
                "p",
                { className: "text-center" },
                React.createElement(SignInButton, null)
            )
        );
    }
});

var SignInButton = React.createClass({
    displayName: "SignInButton",

    render: function () {
        return React.createElement(
            "a",
            { href: "/#donation", role: "button", className: "btn btn-info" },
            "Enter"
        );
    }
});

ReactDOM.render(React.createElement(SignInPage, null), document.getElementById('react'));