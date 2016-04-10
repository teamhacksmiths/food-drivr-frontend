var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "signin": "signin",
    "signup": "signup",
    "donation": "donation"
  },
  index: function () {
    ReactDOM.render(React.createElement(HomePage, null), document.getElementById('react'));
  },
  signin: function () {
    ReactDOM.render(React.createElement(SignInPage, null), document.getElementById('react'));
  },
  signup: function () {
    ReactDOM.render(React.createElement(SignUpPage, null), document.getElementById('react'));
  },
  donation: function () {
    ReactDOM.render(React.createElement(DonationPage, null), document.getElementById('react'));
  }
});

new Router();

Backbone.history.start();