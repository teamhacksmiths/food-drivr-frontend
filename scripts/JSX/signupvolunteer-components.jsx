import {Header, Headline, Footer} from './reusable-components.jsx';
import React from 'react';
import {Link} from 'react-router';

var SignUpVolunteer = React.createClass({
	render: function(){
		return (
				<div className='container'>
					<Headline value="Sign Up as a Volunteer" />
					<FormVolunteer />
				</div>
		);
	}
});

var FormVolunteer = React.createClass({
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
			<Link to="/donation" role="button" className='btn btn-info'>Register</Link>
		);
	}
});

module.exports = SignUpVolunteer;