var Router = Backbone.Router.extend({
  routes : {
    ""    : "index",
    "signin" : "signin",
    "signup" : "signup",
    "donation" : "donation"
  },
  index : function() {
    ReactDOM.render(
      <HomePage />,
    document.getElementById('react')
      );
  },
  signin : function() {
    ReactDOM.render(
      <SignInPage />,
    document.getElementById('react')
      );
  },
  signup : function() {
    ReactDOM.render(
      <SignUpPage />,
    document.getElementById('react')
);
  },
  donation : function() {
    ReactDOM.render(
      <DonationPage />,
    document.getElementById('react')
);
  }
});
 
new Router();
 
Backbone.history.start();
