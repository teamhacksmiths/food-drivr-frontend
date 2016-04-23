import {Headline} from './reusable-components.jsx';
import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

var SignUpDonor = React.createClass({
	render: function(){
		return (
				<div className='container'>
					<Headline value="Sign Up as a Donor" />
					<FormDonor />
				</div>
		);
	}
});

var FormDonor = React.createClass({
	contextTypes: {
    	router: React.PropTypes.object.isRequired
  	},
	getInitialState: function(){
		return {data: [],
		name: '',
		email: '',
		password: '',
		passwordConfirmation: ''
		};
	},
	onSubmitUser: function (e) {
    e.preventDefault();
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.password;
    var passwordConfirmation = this.state.passwordConfirmation;
    	this.setState({
			name: '',
			email: '',
			password: '',
			passwordConfirmation: ''
   	 	});
	},
    handleChange: function (e) {
    	this.setState({
			value: this.refs.input.value
    	});
    },
	submitUserToServer: function() {
		var donations = [];
        $.ajax({
            url: 'https://wastenotfoodtaxi.herokuapp.com/api/v1/users',
            type: 'POST',
            dataType: 'json',
            data: {},
            cache: false,
            success: function(data) {
        		this.setState({data: data});
     		}.bind(this),
            error: function(xhr, status, err) {
        		console.error(this.props.url, status, err.toString());
      		}.bind(this),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'sxmZ9FczHE-Nz-ykFcea'
            }
        })
		},

  	render: function(){
	return (
		<form onSubmit={this.onSubmitUser}>
			<div className="form-group">
		  		<input 
		  			type="text"
		  			required
		  			placeholder="Name"
		  			id="signup-name"
		  			className="form-control"
		  			onChange={this.handleChange}
		  			value={this.state.name} />
			</div>
			<div className="form-group">
			  	<input 
			  		type="email"
			  		required
			  		placeholder="Email"
			  		id="signup-email"
			  		className="form-control"
			  		onChange={this.handleChange}
			  		value={this.state.email} />
			</div>
			<div className="form-group">
			  	<input 
			  		type="password"
			  		required
			  		placeholder="Password"
			  		id="signup-password"
			  		className="form-control"
			  		onChange={this.handleChange}
			  		value={this.state.password} />
			</div>
			<div className="form-group">
			  	<input 
			  		type="password"
			  		required
			  		placeholder="Password Confirmation"
			  		id="signup-password"
			  		className="form-control"
			  		onChange={this.handleChange}
			  		value={this.state.passwordConfirmation} />
			</div>
			<span className="text-center">
			  	<SignUpButton/>
			</span>
		</form>
		);
 	}
});

var SignUpButton = React.createClass({
	render: function(){
		return (
			<Link to="" onClick={this.CreateUser} role="button" className='btn btn-info'>Register
			</Link>
		);
	}
});

module.exports = SignUpDonor;