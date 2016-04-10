var InterfaceComponent = React.createClass({
    componentWillMount: function() {
        this.callback = (function() {
            this.forceUpdate();
        }).bind(this);

        this.props.router.on("route", this.callback);
    },
    componentWillUnmount: function() {
        this.props.router.off("route", this.callback);
    },
    render: function() {
    if (this.props.router.current == "") {
      return <HomePage />;
    }
    if (this.props.router.current == "signin") {
      return <SignInPage />;
    }
    if (this.props.router.current == "signup") {
      return <SignUpPage />;
    }
    if (this.props.router.current == "donation") {
      return <DonationPage />;
    }
    return <div />;
  }
});

var Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "signin": "signin",
        "signup": "signup",
        "donation": "donation"
    },
    index: function() {
        this.current = "";
    },
    signin: function() {
        this.current = "signin";
    },
    signup: function() {
        this.current = "signup";
    },
    donation: function() {
        this.current = "donation";
    }
});

var router = new Router();

ReactDOM.render( 
    <InterfaceComponent router={router} />,
    document.getElementById('react')
);

Backbone.history.start();