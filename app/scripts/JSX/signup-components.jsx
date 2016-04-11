var SignUpPage = React.createClass({
	render: function(){
		return (
			<div className="signup">
				<Header />
				<div className='container'>
					<Headline value="Sign Up as a Donor" />
					<SignUpForm />
				</div>
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
			   	<input type="text" placeholder="Address" required id="signup-address" className="form-control"/>
			</div>
			<div className="form-group">
			  	<input type="tel" placeholder="Phone" required id="signup-phone" className="form-control"/>
			</div>
			<div className="form-group">
			  	<input type="email" placeholder="Email" required id="signup-email" className="form-control"/>
			</div>
			<p className="text-center">
			  	<SignUpButton />
			</p>
		</form>
		);
 	}
});

var SignUpButton = React.createClass({
	render: function(){
		return (
			<a href="/#donation" role="button" className='btn btn-info'>Register</a>
		);
	}
});


ReactDOM.render(
  	<SignUpPage />,
	document.getElementById('react')
);