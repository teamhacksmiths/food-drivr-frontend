import { Headline } from './reusable-components.jsx';
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

var SignUpDonor = React.createClass({
    render: function() {
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
    getInitialState: function() {
        return {
            userData: {},
            sessionData: {},
            sessionKey: {},
            user: {},
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
    },
    handleSubmitUser: function(e) {
        e.preventDefault();
        var name = this.state.name;
        var email = this.state.email;
        var password = this.state.password;
        var passwordConfirmation = this.state.passwordConfirmation;
        var user = {
            'user': {
                'name': name,
                'email': email,
                'password': password,
                'password_confirmation': passwordConfirmation
            }
        };
        var userData = this.state.userData;
        var sessionData = this.state.sessionData;
        var sessionKey = this.state.sessionKey;
        console.log(user); {

            /*        if (data.password !== data.password_confirmation) {
                      // log error to screen that passwords must be the same
                    }
                    else
                    {

                    }
                    */
        }
        this.createUser(user);
},
    handleNameChange: function(e) {
        this.setState({
            name: e.target.value
        });
    },
    handleEmailChange: function(e) {
        this.setState({
            email: e.target.value
        });
    },
    handlePasswordChange: function(e) {
        this.setState({
            password: e.target.value
        });
    },
    handlePasswordConfirmChange: function(e) {
        this.setState({
            passwordConfirmation: e.target.value
        });
    },
    createUser: function(user) {
        $.ajax({
            url: 'https://wastenotfoodtaxi.herokuapp.com/api/v1/users',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(user),
            processData: false,
            cache: false,
            contentType: 'application/json; charset=UTF-8',
            success: function(data) {
                this.setState({ userData: data });
                console.log(this.state.userData);
                console.log(this.state.sessionData);
                //this.createSession(sessionData);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this),
        })
    },
    createSession: function(sessionData) {
        $.ajax({
            url: 'https://wastenotfoodtaxi.herokuapp.com/api/v1/sessions',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(sessionData),
            processData: false,
            cache: false,
            contentType: 'application/json; charset=UTF-8',
            success: function(data) {
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this),
        })
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmitUser}>
      <div className="form-group">
          <input 
            type="text"
            required
            placeholder="Name"
            id="signup-name"
            className="form-control"
            onChange={this.handleNameChange}
            value={this.state.name}
            />
      </div>
      <div className="form-group">
          <input 
            type="email"
            required
            placeholder="Email"
            id="signup-email"
            className="form-control"
            onChange={this.handleEmailChange}
            value={this.state.email}
            />
      </div>
      <div className="form-group">
          <input 
            type="password"
            required
            placeholder="Password"
            id="signup-password"
            className="form-control"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            />
      </div>
      <div className="form-group">
          <input 
            type="password"
            required
            placeholder="Password Confirmation"
            id="signup-password"
            className="form-control"
            onChange={this.handlePasswordConfirmChange}
            value={this.state.passwordConfirmation}
            />
      </div>
      <span className="text-center">
          <SignUpButton/>
      </span>
    </form>
        );
    }
});

var SignUpButton = React.createClass({
    render: function() {
        return (
            <button
              className='btn btn-info'
              type='submit'>
                Register
           </button>
        );
    }
});

module.exports = SignUpDonor;
