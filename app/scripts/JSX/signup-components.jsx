var SignUpPage = React.createClass({
  render: function(){
    return (
      <div className="signup">
        <Header />
        <h1 className="text-center">Sign Up as a Donor</h1>
        <SignUpForm />
        <Footer />
      </div>
      );
  }
});

var SignUpForm = React.createClass({
  render: function(){
    return (
      <form action="">
        <div className="form-group">
          <input type="text" placeholder="Name" id="signup-name" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" id="signup-company" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Address" id="signup-address" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Phone" id="signup-phone" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" id="signup-email" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" id="signup-password" className="form-control"/>
        </div>
        <SignUpButton />
      </form>
        );
  }
});

var SignUpButton = React.createClass({
<<<<<<< c90889390a299d9eb93ab80efeef0c8a2e21cd76:app/scripts/JSX/signup-components.jsx
	render: function(){
		return (
			<button type="submit" className="btn btn-custom">Register</button>
			);
	}
});
=======
  render: function(){
    return (
      <button type="submit" className="btn btn-custom">Register</button>
      );
  }
});

ReactDOM.render(
  <SignUpPage />,
    document.getElementById('react')
);
>>>>>>> Designed the donations page template for dynamic loading of past donations along with a modal for further description.:app/scripts/JSX/signup-component.jsx
