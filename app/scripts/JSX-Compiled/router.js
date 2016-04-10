var InterfaceComponent = React.createClass({
    displayName: "InterfaceComponent",

    componentWillMount: function () {
        this.callback = function () {
            this.forceUpdate();
        }.bind(this);

        this.props.router.on("route", this.callback);
    },
    componentWillUnmount: function () {
        this.props.router.off("route", this.callback);
    },
    render: function () {
        if (this.props.router.current == "") {
            return React.createElement(HomePage, null);
        }
        if (this.props.router.current == "signin") {
            return React.createElement(SignInPage, null);
        }
        if (this.props.router.current == "signup") {
            return React.createElement(SignUpPage, null);
        }
        if (this.props.router.current == "donation") {
            return React.createElement(DonationPage, null);
        }
        return React.createElement("div", null);
    }
});

var Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "signin": "signin",
        "signup": "signup",
        "donation": "donation"
    },
    index: function () {
        this.current = "";
    },
    signin: function () {
        this.current = "signin";
    },
    signup: function () {
        this.current = "signup";
    },
    donation: function () {
        this.current = "donation";
    }
});

var router = new Router();

ReactDOM.render(React.createElement(InterfaceComponent, { router: router }), document.getElementById('react'));

Backbone.history.start();